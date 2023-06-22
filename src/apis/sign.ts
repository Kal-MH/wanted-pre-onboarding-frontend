import { userInput } from "../interfaces/user";
import getErrorWithMessage from "../utils/getErrorWithMessage";
import HTTP from "./instance";

export const postSignUp = async ({ email, password }: userInput) => {
  try {
    await HTTP.post({
      url: "/auth/signup",
      data: {
        email,
        password,
      },
    });
  } catch (e) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};

export const postSignIn = async ({ email, password }: userInput) => {
  try {
    const { data } = await HTTP.post({
      url: "/auth/signin",
      data: {
        email,
        password,
      },
    });

    return data;
  } catch (e) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};
