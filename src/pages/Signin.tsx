import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { postSignIn } from "../apis/sign";
import { Header } from "../components/base";
import SearchForm from "../components/sign/SeachForm";
import { userInput } from "../interfaces/user";
import { ROUTES, STORAGE_KEYS } from "../utils/constants";
import { setLocalStorage } from "../utils/storage";

const Signin = () => {
  const navigate = useNavigate();

  const handleSearchFormSubmit = async (inputValue: userInput) => {
    try {
      const { access_token } = await postSignIn(inputValue);
      access_token && setLocalStorage(STORAGE_KEYS.TOKEN, access_token);

      navigate(ROUTES.TODO);
    } catch (e) {
      alert(e);
      navigate(ROUTES.SIGNUP);
    }
  };
  return (
    <Fragment>
      <Header>Sign In</Header>
      <main>
        <SearchForm buttonTitle='Sign In' onSubmit={handleSearchFormSubmit} />
      </main>
    </Fragment>
  );
};

export default Signin;
