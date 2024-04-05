import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/contactSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
};