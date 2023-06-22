import { todoData } from "../interfaces/todo";
import getErrorWithMessage from "../utils/getErrorWithMessage";
import HTTP from "./instance";

export const getTodos = async () => {
  try {
    const { data } = await HTTP.get({
      url: "/todos",
    });

    return data;
  } catch (e: unknown) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};

export const postCreateTodos = async (todo: string) => {
  try {
    const { data } = await HTTP.post({
      url: "/todos",
      data: {
        todo,
      },
    });

    return data;
  } catch (e) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};

export const deleteTodos = async (id: string) => {
  try {
    const { data } = await HTTP.delete({
      url: `/todos/${id}`,
    });

    return data;
  } catch (e) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};

export const updateTodos = async ({ id, todo, isCompleted }: todoData) => {
  try {
    const { data } = await HTTP.put({
      url: `/todos/${id}`,
      data: {
        todo,
        isCompleted,
      },
    });

    return data;
  } catch (e) {
    throw new Error(getErrorWithMessage(e).response.data);
  }
};
