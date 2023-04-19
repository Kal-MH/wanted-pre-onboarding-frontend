import styled from "@emotion/styled";
import Information from "../components/sign/Information";
import { Button } from "../components/base";

const Signin = () => {
  return (
    <Container>
      <Information />
      <Button data-testid='signin-button'>Sign In</Button>
    </Container>
  );
};

export default Signin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
