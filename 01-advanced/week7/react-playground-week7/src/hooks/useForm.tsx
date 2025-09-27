import React from "react";

// los keys y valores pueden ser cualquier valor
function useForm<T>(initialValues: T) {
  const [formData, setFormData] = React.useState(initialValues);

  // ten en cuenta que en vez de un input podria ser tambien un select u otro
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // as const definira el array como readonly
  return [formData, handleChange] as const;
}

export default useForm;
