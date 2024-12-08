import { useState } from "react";

const useForm = (initalValue) => {
  const [form, setForm] = useState(initalValue);

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return { form, updateForm };
};

export default useForm;
