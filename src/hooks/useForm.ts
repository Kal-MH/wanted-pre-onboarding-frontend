import { useState } from "react";

import { userInputError } from "../interfaces/error";
import { userInput } from "../interfaces/user";

interface Props {
  initialValue: userInput;
  validate: (values: userInput) => userInputError;
  onSubmit: Function;
}

const useForm = ({
  initialValue = { email: "", password: "" },
  validate,
  onSubmit,
}: Props) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValues = { ...values, [name]: value };
    setValues(newValues);
    const newErrors = validate ? validate(newValues) : {};
    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }

    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors: Object.keys(errors).length,
    isLoading,
    handleInputChange,
    handleSubmit,
  };
};

export default useForm;
