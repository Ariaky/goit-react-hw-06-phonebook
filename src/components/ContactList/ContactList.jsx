import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';
import css from './ContactList.module.css';
import { selectContact } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();
  return (
    <ul className={css.wrapper}>
      {contacts.map(({ id, name, number }) => 
      (   <li key={id}>
            {name}: {number}{' '}
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li> )
      )}
    </ul>
  )
}
/*import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.wrapper}>
      {/* List Items }
    </ul>
  );
};*/