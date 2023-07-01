import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { postSignUp } from "../apis/sign";
import { Header } from "../components/base";
import SearchForm from "../components/sign/SeachForm";
import { userInput } from "../interfaces/user";
import { ROUTES } from "../utils/constants";

const Signup = () => {
  const navigate = useNavigate();

  const handleSearchFormSubmit = async (inputValue: userInput) => {
    try {
      await postSignUp(inputValue);
      navigate(ROUTES.SIGNIN);
    } catch (e) {
      alert(e);
      navigate(ROUTES.SIGNUP);
    }
  };
  return (
    <Fragment>
      <Header>Sign Up</Header>
      <main>
        <SearchForm buttonTitle='Sign Up' onSubmit={handleSearchFormSubmit} />
      </main>
    </Fragment>
  );
};

export default Signup;
