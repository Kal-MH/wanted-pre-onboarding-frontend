import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/base";
import useForm from "../hooks/useForm";
import { validateInput } from "../utils/validateInput";
import { postSignUp } from "../apis/sign";
import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";
import Information from "../components/sign/Information";
import { ROUTES, STORAGE_KEYS } from "../utils/constants";

const Signup = () => {
  const navigate = useNavigate();
  const [token] = useLocalStorage(STORAGE_KEYS.TOKEN, "");
  const { errors, handleInputChange, handleSubmit } = useForm({
    initialValue: [],
    validate: validateInput,
    onSubmit: async (values) => {
      try {
        await postSignUp(values);
        navigate(ROUTES.SIGNIN);
      } catch (e) {
        alert(e);
      }
    },
  });

  useEffect(() => {
    if (token) {
      navigate(ROUTES.TODO);
    }
  }, [token, navigate]);

  return (
    <Container>
      <Information handleInputChange={handleInputChange} />
      <Button
        data-testid='signup-button'
        disabled={errors}
        onClick={handleSubmit}>
        Sign Up
      </Button>
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
