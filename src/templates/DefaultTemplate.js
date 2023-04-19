import styled from "@emotion/styled";
import Header from "../components/base/Header";
import Nav from "../components/shared/Nav";
import { Fragment } from "react";

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
