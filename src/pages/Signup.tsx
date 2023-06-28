import styled from "@emotion/styled";

import { Button, Input } from "../components/base";

const Signup = () => {
  return (
    <Container>
      <Input data-testid='email-input' name='email' placeholder='email' />
      <Input
        data-testid='password-input'
        name='password'
        type='password'
        placeholder='password'
      />
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
