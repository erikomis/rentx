import React from "react";
import { Container, Header, HeaderContent, TotalCars } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

export const Home = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
};
