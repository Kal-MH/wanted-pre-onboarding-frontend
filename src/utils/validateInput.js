export const validateInput = (values) => {
  const newError = {};
  const { email, password } = values;

  const passwordRegex = /^.{8,}$/;

  if (!email || email.indexOf("@") < 0)
    newError["email"] = "Invalid: Email with no '@'";
  if (!password || !passwordRegex.test(password))
    newError["password"] = "Invalid: Password under 8 length";

  return newError;
};
