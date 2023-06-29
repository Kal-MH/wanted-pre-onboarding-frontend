import { Fragment } from "react";

import { Header } from "../components/base";
import SearchForm from "../components/sign/SeachForm";
import { userInput } from "../interfaces/user";

const Signup = () => {
  const handleSearchFormSubmit = (inputValue: userInput) => {
    console.log(inputValue);
    //TODO: API로직 수행
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
