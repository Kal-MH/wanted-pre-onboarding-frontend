import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { postSignIn } from "../apis/sign";
import { Button } from "../components/base";
import Information from "../components/sign/Information";
import useForm from "../hooks/useForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { userInput } from "../interfaces/user";
import { ROUTES, STORAGE_KEYS } from "../utils/constants";
import { validateInput } from "../utils/validateInput";

const Signin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useLocalStorage(STORAGE_KEYS.TOKEN, "");
  const { errors, handleInputChange, handleSubmit } = useForm({
    initialValue: {},
    validate: validateInput,
    onSubmit: async (values: userInput) => {
      try {
        const { access_token } = await postSignIn(values);
        access_token && setToken(access_token);

        navigate(ROUTES.TODO);
      } catch (e) {
        alert(e);
        navigate(ROUTES.SIGNUP);
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
        data-testid='signin-button'
        disabled={errors ? true : false}
        onClick={handleSubmit}>
        Sign In
      </Button>
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
