import { useEffect, useState } from "react";

import { getTodos } from "../apis/todos";
import useAsync from "./useAsync";

export const useGetTodos = () => {
  const { state, data, fetchData } = useAsync(getTodos);

  return { state, data, fetchData };
};
