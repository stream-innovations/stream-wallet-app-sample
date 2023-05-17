import React, { useState } from 'react';
import PaymentCard from './components/PaymentCard';

const Checkout = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
    };

    const handleCardHolderChange = (e) => {
        setCardHolder(e.target.value);
    };

    const handleExpiryDateChange = (e) => {
        setExpiryDate(e.target.value);
    };

    return ( <
        div >
        <
        h2 > Checkout < /h2> <
        div >
        <
        label > Card Number: < /label> <
        input type = "text"
        value = { cardNumber }
        onChange = { handleCardNumberChange }
        /> <
        /div> <
        div >
        <
        label > Card Holder: < /label> <
        input type = "text"
        value = { cardHolder }
        onChange = { handleCardHolderChange }
        /> <
        /div> <
        div >
        <
        label > Expiry Date: < /label> <
        input type = "text"
        value = { expiryDate }
        onChange = { handleExpiryDateChange }
        /> <
        /div> <
        PaymentCard cardNumber = { cardNumber }
        cardHolder = { cardHolder }
        expiryDate = { expiryDate }
        /> { /* Other checkout components */ } { /* Payment and order summary */ } <
        /div>
    );
};

export default Checkout;