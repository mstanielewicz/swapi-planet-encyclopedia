import React, { useContext, useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { Container, Header, OpenButton, Title } from "./styles";
import { ApiClientContext } from "../../contexts/ApiClient";
import { Loader } from "../Loader/Loader";
import { PlanetsTable } from "../PlanetsTable/PlanetsTable";
import ArrowOpen from "../../assets/images/ARROW_OPEN.svg";

export const Movie = ({ planets, title }) => {
  const apiClient = useContext(ApiClientContext);
  const [collapsed, setCollapsed] = useState(false);
  const [planetsData, setPlanetsData] = useState([]);
  const [fetchingPlanetsData, setFetchingPlanetsData] = useState(false);
  const [error, setError] = useState(false);
  const toggleCollapsed = () => setCollapsed(prev => !prev);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        setFetchingPlanetsData(true);
        const promises = await apiClient.fetchPlanets(planets);
        const responses = await Promise.all(promises);
        const data = await Promise.all(responses.map(planet => planet.json()));
        setPlanetsData(data);
      } catch (error) {
        setError(true);
      } finally {
        setFetchingPlanetsData(false);
      }
    };

    if (collapsed && planetsData.length === 0 && !fetchingPlanetsData) {
      fetchPlanets();
    }
  }, [collapsed, planetsData, fetchingPlanetsData, planets]);

  if (error) {
    return <div>500 ERROR</div>;
  }

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <OpenButton collapsed={collapsed} alt="" onClick={toggleCollapsed}>
          <ArrowOpen />
        </OpenButton>
      </Header>
      <AnimateHeight duration={500} height={collapsed ? "auto" : 0}>
        {fetchingPlanetsData ? <Loader /> : null}
        {!fetchingPlanetsData && planetsData.length > 1 ? (
          <PlanetsTable planetsData={planetsData} />
        ) : null}
      </AnimateHeight>
    </Container>
  );
};
