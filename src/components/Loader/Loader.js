import React from "react";
import { Container } from "./styles";
import loader from "../../assets/images/LOADER-ARROWS.png";

export const Loader = () => (
  <Container>
    <img src={loader} alt="" />
  </Container>
);
