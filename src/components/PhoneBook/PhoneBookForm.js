// PhoneBookForm.js
import React, { useState } from 'react';

const PhoneBookForm = ({ addContact }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cryptoAmount, setCryptoAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && phoneNumber && cryptoAmount) {
            const contact = {
                id: Date.now(),
                name,
                phoneNumber,
                cryptoAmount
            };

            addContact(contact);
            setName('');
            setPhoneNumber('');
            setCryptoAmount('');
        }
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        /> <
        input type = "text"
        placeholder = "Phone Number"
        value = { phoneNumber }
        onChange = {
            (e) => setPhoneNumber(e.target.value) }
        /> <
        input type = "text"
        placeholder = "Cryptocurrency Amount"
        value = { cryptoAmount }
        onChange = {
            (e) => setCryptoAmount(e.target.value) }
        /> <
        button type = "submit" > Add Contact < /button> <
        /form>
    );
};

export default PhoneBookForm;