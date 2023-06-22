import styled from "@emotion/styled";
import { Fragment, ReactNode } from "react";

import Header from "../components/base/Header";
import Nav from "../components/shared/Nav";

interface Props {
  children: ReactNode;
}

const DefaultTemplate = ({ children }: Props) => {
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
