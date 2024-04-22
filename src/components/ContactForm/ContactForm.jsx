/*import React, { useState } from 'react';*/
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactSlice';
import { useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: '', number: '' });

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ ...formData, id: nanoid() }));
    setFormData({ name: '', number: '' });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      {/* Form Inputs */}
    </form>
  );
};