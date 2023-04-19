const storage = localStorage;

export const getLocalStorage = (key, defaultValue = "") => {
  try {
    const storedValue = JSON.parse(storage.getItem(key) || '""');

    return storedValue ? storedValue : defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

export const setLocalStorage = (key, value) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const removeLocalStorage = (key) => {
  try {
    storage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};
