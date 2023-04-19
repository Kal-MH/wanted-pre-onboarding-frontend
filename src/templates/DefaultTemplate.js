import styled from "@emotion/styled";
import Header from "../components/base/Header";

const DefaultTemplate = ({ children }) => {
  return (
    <Container>
      <Header>Todo</Header>
      <main>{children}</main>
    </Container>
  );
};

export default DefaultTemplate;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
