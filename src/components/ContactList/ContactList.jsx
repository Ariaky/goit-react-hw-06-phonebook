import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.wrapper}>
      {/* List Items */}
    </ul>
  );
};