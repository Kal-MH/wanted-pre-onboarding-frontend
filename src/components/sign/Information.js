import styled from "@emotion/styled";

import { Input } from "../base";

const Information = ({ handleInputChange, props }) => {
  return (
    <Container>
      <Input
        data-testid='email-input'
        name='email'
        placeholder='email'
        onChange={handleInputChange}
      />
      <Input
        data-testid='password-input'
        name='password'
        type='password'
        placeholder='password'
        onChange={handleInputChange}
      />
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
