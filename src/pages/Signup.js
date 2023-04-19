import styled from "@emotion/styled";
import Information from "../components/sign/Information";
import { Button } from "../components/base";

const Signup = () => {
  return (
    <Container>
      <Information />
      <Button data-testid='signup-button'>Sign Up</Button>
    </Container>
  );
};

export default Signup;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
