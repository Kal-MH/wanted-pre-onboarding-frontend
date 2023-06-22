import { userInputError } from "../interfaces/error";
import { userInput } from "../interfaces/user";

export const validateInput = (values: userInput) => {
  const newError = {} as userInputError;
  const { email, password } = values;

  const passwordRegex = /^.{8,}$/;

  if (!email || email.indexOf("@") < 0)
    newError["email"] = "Invalid: Email with no '@'";
  if (!password || !passwordRegex.test(password))
    newError["password"] = "Invalid: Password under 8 length";

  return newError;
};
