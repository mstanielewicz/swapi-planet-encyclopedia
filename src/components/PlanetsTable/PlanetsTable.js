import React, { useState } from "react";
import { Container, Table, TableBody, TableHeader } from "./styles";

export const PlanetsTable = ({ planetsData }) => {
  const [sortKey, setSortKey] = useState(HEADERS[0]);
  const [sortOrder, setSortOrder] = useState("DESC");

  const toggleSortOrder = () =>
    setSortOrder(prev => (prev === "DESC" ? "ASC" : "DESC"));

  const handleHeaderClick = sort => {
    if (sort === sortKey) {
      toggleSortOrder();
    } else {
      setSortKey(sort);
      setSortOrder("DESC");
    }
  };

  const sortFunc = (a, b) => {
    const valueA = STRING_DATA.includes(sortKey)
      ? a[sortKey]
      : Number(a[sortKey]);
    const valueB = STRING_DATA.includes(sortKey)
      ? b[sortKey]
      : Number(b[sortKey]);

    if (sortOrder === "DESC") {
      if (valueA > valueB) {
        return 1;
      } else if (valueA < valueB) {
        return -1;
      } else {
        return 0;
      }
    } else {
      if (valueA < valueB) {
        return 1;
      } else if (valueA > valueB) {
        return -1;
      } else {
        return 0;
      }
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {HEADERS.map(header => (
              <TableHeader
                key={header}
                onClick={() => handleHeaderClick(header)}
              >
                <span>{getLabel(header)}</span>
              </TableHeader>
            ))}
          </tr>
        </thead>
        <TableBody>
          {planetsData.sort(sortFunc).map(planet => (
            <tr key={planet.name}>
              {HEADERS.map((header, key) => (
                <td key={key}>
                  <div>{planet[header]}</div>
                </td>
              ))}
            </tr>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

const HEADERS = [
  "name",
  "rotation_period",
  "orbital_period",
  "diameter",
  "climate",
  "surface_water",
  "population"
];

const STRING_DATA = ["name", "climate"];

const getLabel = header =>
  header === "name" ? "planet name" : header.replace("_", " ");
