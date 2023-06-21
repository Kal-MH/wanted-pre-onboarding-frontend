import styled from "@emotion/styled";
import { Fragment } from "react";

import Header from "../components/base/Header";
import Nav from "../components/shared/Nav";

const DefaultTemplate = ({ children }) => {
  return (
    <Fragment>
      <Nav />
      <Container>
        <Header>Todo</Header>
        <main>{children}</main>
      </Container>
    </Fragment>
  );
};

export default DefaultTemplate;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
