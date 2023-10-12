import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';

export function ContactList() {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    return (
        <ul>
        {filteredContacts.map(contact => (
            <li key={contact.id}>
            {contact.name}: {contact.number} <b></b>
            <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
            </li>
        ))}
        </ul>
    );
}


