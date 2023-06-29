import styled from "@emotion/styled";
import { ChangeEvent, FormEvent, Fragment, useState } from "react";

import { Header } from "../components/base";
import SearchForm from "../components/sign/SeachForm";
import { userInput } from "../interfaces/user";

const Signin = () => {
  const handleSearchFormSubmit = (inputValue: userInput) => {
    console.log(inputValue);
    //TODO: API로직 수행
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
