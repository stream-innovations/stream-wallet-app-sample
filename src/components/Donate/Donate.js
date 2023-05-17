import React, { useState } from 'react';

const Donate = () => {
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');
    const [paymentOption, setPaymentOption] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handlePaymentOptionChange = (e) => {
        setPaymentOption(e.target.value);
    };

    const handleDonate = (e) => {
        e.preventDefault();

        // Perform any necessary validation on amount, message, and paymentOption

        // Call your donation API or payment gateway here based on the selected payment option
        // Replace the placeholder code with your actual implementation

        console.log('Donation amount:', amount);
        console.log('Donation message:', message);
        console.log('Payment option:', paymentOption);

        // Reset the form fields
        setAmount('');
        setMessage('');
        setPaymentOption('');
    };

    return ( <
        div >
        <
        h2 > Donate < /h2> <
        form onSubmit = { handleDonate } >
        <
        div >
        <
        label > Amount: < /label> <
        input type = "number"
        value = { amount }
        onChange = { handleAmountChange }
        placeholder = "Enter the donation amount" /
        >
        <
        /div> <
        div >
        <
        label > Message: < /label> <
        textarea value = { message }
        onChange = { handleMessageChange }
        placeholder = "Enter an optional message" /
        >
        <
        /div> <
        div >
        <
        label > Payment Option: < /label> <
        select value = { paymentOption }
        onChange = { handlePaymentOptionChange } >
        <
        option value = "" > Select an option < /option> <
        option value = "creditcard" > Credit Card < /option> <
        option value = "paypal" > PayPal < /option> <
        option value = "applepay" > ApplePay < /option> <
        option value = "streampay" > StreamPay < /option> { / * Add more payment options * / } < /
        select > <
        /div> <
        button type = "submit" > Donate < /button> < /
        form > <
        /div>
    );
};

export default Donate;