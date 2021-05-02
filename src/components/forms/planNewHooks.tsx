import { ipcRenderer } from 'electron';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const useForm = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);
  const [errors, setErrors] = useState(initialValues);

  const history = useHistory();

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const validationErrors = validate(inputs);
    const hasErrors = Object.keys(validationErrors).length !== 0;
    
    setErrors(validationErrors);
    if (hasErrors) {
      alert(`Error: ${JSON.stringify(validationErrors)}`);
    } else {
      ipcRenderer.send("json-file", inputs.note, inputs.character);
      alert("Created plan for " + inputs.character);
      history.push({
        pathname: `/${inputs.character}/plan`,
        state: {
          notes: inputs.note,
          character: inputs.character,
        },
      });
    }
  }
  const handleInputChange = (event) => {
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    errors
  };
}
export default useForm;
