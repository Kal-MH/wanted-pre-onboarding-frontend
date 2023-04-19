import styled from "@emotion/styled";
import TaskProvider from "../context/TodoProvider";
import Header from "../components/base/Header";

const DefaultTemplate = ({ children }) => {
  return (
    <TaskProvider>
      <Container>
        <Header>Todo</Header>
        <main>{children}</main>
      </Container>
    </TaskProvider>
  );
};

export default DefaultTemplate;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;
