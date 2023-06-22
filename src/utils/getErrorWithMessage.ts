type ErrorWithMessage = {
  response: {
    data: string;
  };
};
const isErrorWithMessage = (error: unknown) => {
  return (
    error && typeof error === "object" && "response" in error && "data" in error
  );
};

const getErrorWithMessage = (error: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(error)) return error as ErrorWithMessage;

  return { response: { data: JSON.stringify(error) } };
};

export default getErrorWithMessage;
