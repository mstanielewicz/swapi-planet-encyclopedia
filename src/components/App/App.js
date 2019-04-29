import React, { useContext, useEffect, useState } from "react";
import GlobalStyles from "../../styles/globalStyles";
import { Container, MoviesContainer } from "./styles";
import { ApiClientContext } from "../../contexts/ApiClient";
import { Movie } from "../Movie/Movie";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import Logo from "../../assets/images/LOGO.svg";

export const App = () => {
  const apiClient = useContext(ApiClientContext);
  const [movies, setMovies] = useState([]);
  const [fetchingMovies, setFetchingMovies] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setFetchingMovies(true);
        const response = await apiClient.fetchMovies();
        const { results } = await response.json();
        setMovies(results.sort((a, b) => a.episode_id - b.episode_id));
      } catch (error) {
        setError(true);
      } finally {
        setFetchingMovies(false);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <div>500 ERROR</div>;
  }

  return (
    <Container>
      <GlobalStyles />
      <Logo />
      <MoviesContainer>
        {fetchingMovies ? <Loader /> : null}
        {!fetchingMovies && movies.length > 1
          ? movies.map(movie => (
              <Movie
                key={movie.episode_id}
                planets={movie.planets}
                title={movie.title}
              />
            ))
          : null}
      </MoviesContainer>
      <Footer />
    </Container>
  );
};
