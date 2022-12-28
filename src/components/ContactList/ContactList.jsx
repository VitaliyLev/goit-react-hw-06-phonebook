import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { Button, Item } from './ContactList.styled';

export function ContactList() {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const filterContactByName = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {filterContactByName().map(({ name, number, id }) => (
        <Item key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </Item>
      ))}
    </ul>
  );
}
