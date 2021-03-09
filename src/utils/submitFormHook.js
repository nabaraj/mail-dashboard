import { useState } from 'react';

function useUpdateForm(initValue = {}) {
  const [formData, setFormData] = useState(initValue);

  const changeField = (e) => {
    let formObject = { ...formData };
    setFormData({ ...formObject, [e.target.name]: e.target.value });
  }

  const resetForm = (initialValue) => {
    let formObject = { ...formData };
    setFormData({ ...formObject, ...initialValue });
  }

  return [formData, changeField, resetForm];
  
}

export default useUpdateForm;