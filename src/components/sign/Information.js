import styled from "@emotion/styled";
import { Input } from "../base";
import useForm from "../../hooks/useForm";

const Information = (props) => {
  const { handleInputChange } = useForm({
    initialValue: [],
    validate: (values) => {
      console.log(values, "hello");

      return { email: "error!" };
    },
    onSubmit: (values) => {
      console.log(values, "submit");
    },
  });
  return (
    <Container {...props}>
      <Input
        data-testid='email-input'
        name='email'
        placeholder='email'
        onChange={handleInputChange}
      />
      <Input
        data-testid='password-input'
        name='password'
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
