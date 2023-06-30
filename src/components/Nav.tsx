import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ROUTES } from "../utils/constants";

const Nav = () => {
  return (
    <S.UnorderedList>
      <li>
        <Link to={ROUTES.HOME}>HOME</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGNUP}>SIGNUP</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGNIN}>SIGNIN</Link>
      </li>
      <li>
        <Link to={ROUTES.TODO}>TODO</Link>
      </li>
    </S.UnorderedList>
  );
};

export default Nav;

const S = {
  UnorderedList: styled.ul`
    display: flex;

    & > li {
      list-style: none;
      cursor: pointer;
      padding: 10px 5px;
      border-radius: 5px;
      box-sizing: border-box;
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

      & > a {
        text-decoration: none;
        color: black;
      }
    }

    & > li:hover {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  `,
};
