import HTTP from "./instance";

export const getTodos = async () => {
  try {
    const { data } = await HTTP.get({
      url: "/todos",
    });

    return data;
  } catch (e) {
    const { message } = e.response.data;
    throw new Error(message);
  }
};

export const postCreateTodos = async (todo) => {
  try {
    const { data } = await HTTP.post({
      url: "/todos",
      data: {
        todo,
      },
    });

    return data;
  } catch (e) {
    const { message } = e.response.data;
    throw new Error(message);
  }
};

export const deleteTodos = async (id) => {
  try {
    const { data } = await HTTP.delete({
      url: `/todos/${id}`,
    });

    return data;
  } catch (e) {
    const { message } = e.response.data;
    throw new Error(message);
  }
};

export const updateTodos = async ({ id, todo, isCompleted }) => {
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
    const { message } = e.response.data;
    throw new Error(message);
  }
};
