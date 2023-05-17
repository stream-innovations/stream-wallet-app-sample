import React, { useState } from 'react';
import PhoneBookForm from './PhoneBookForm';
import PhoneBookList from './PhoneBookList';

const PhoneBook = () => {
    const [contacts, setContacts] = useState([]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    };

    const deleteContact = (id) => {
        const updatedContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedContacts);
    };

    return ( <
        div >
        <
        h2 > Phone Book < /h2> <
        PhoneBookForm addContact = { addContact }
        /> <
        PhoneBookList contacts = { contacts }
        deleteContact = { deleteContact }
        /> <
        /div>
    );
};

export default PhoneBook;