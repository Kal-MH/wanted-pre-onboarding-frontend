import HTTP from "./instance";

export const postSignUp = async ({ email, password }) => {
  try {
    await HTTP.post({
      url: "/auth/signup",
      data: {
        email,
        password,
      },
    });
  } catch (e) {
    const { message } = e.response.data;
    throw new Error(message);
  }
};

export const postSignIn = async ({ email, password }) => {
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
    const { message } = e.response.data;
    throw new Error(message);
  }
};
