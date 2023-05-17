import React from 'react';
import PaymentCard from './components/PaymentCard';

const Checkout = () => {
    return ( <
        div > { /* Other checkout components */ } <
        PaymentCard cardNumber = "1234 5678 9012 3456"
        cardHolder = "John Doe"
        expiryDate = "12/23" /
        >
        <
        /div>
    );
};

export default Checkout;