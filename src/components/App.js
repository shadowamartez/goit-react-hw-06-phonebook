import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyles } from './GlobalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../redux/contactSlice';

export function App() {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();

    const addContactHandler = newContact => {
        dispatch(addContact(newContact));
    };

    const deleteContactHandler = contactId => {
        dispatch(deleteContact(contactId));
    };

    const handleFilterChange = event => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContactHandler} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} onDeleteContact={deleteContactHandler} />
        <GlobalStyles></GlobalStyles>
        </div>
    );
}
