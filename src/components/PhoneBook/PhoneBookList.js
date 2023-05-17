// PhoneBookList.js
import React from 'react';

const PhoneBookList = ({ contacts, deleteContact }) => {
    const handleTipLink = (contact) => {
        // Logic to handle the "Tip a Link" feature for the given contact
        // You can use an API or library to handle the tipping functionality
        // Example: tippingAPI.tipLink(contact);
        // Replace tippingAPI with the actual library or API you are using
    };

    return ( <
        ul > {
            contacts.map((contact) => ( <
                li key = { contact.id } >
                <
                span > { contact.name } < /span> <
                span > { contact.phoneNumber } < /span> <
                span > { contact.cryptoAmount } < /span> <
                button onClick = {
                    () => deleteContact(contact.id) } > Delete < /button> <
                button onClick = {
                    () => handleTipLink(contact) } > Tip a Link < /button> <
                /li>
            ))
        } <
        /ul>
    );
};

export default PhoneBookList;