import styled from "@emotion/styled";
import { Input } from "../base";

const Information = (props) => {
  return (
    <Container {...props}>
      <Input data-testid='email-input' placeholder='email' />
      <Input data-testid='password-input' placeholder='password' />
    </Container>
  );
};

export default Information;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;
