import React, { useState } from 'react';

const CustomerRegistration = ({ handleRegistration }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(name, email, password);
    };

    return ( <
        div >
        <
        h2 > Registration < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Name: < /label> <
        input type = "text"
        value = { name }
        onChange = { handleNameChange }
        /> <
        /div> <
        div >
        <
        label > Email: < /label> <
        input type = "email"
        value = { email }
        onChange = { handleEmailChange }
        /> <
        /div> <
        div >
        <
        label > Password: < /label> <
        input type = "password"
        value = { password }
        onChange = { handlePasswordChange }
        /> <
        /div> <
        button type = "submit" > Register < /button> <
        /form> <
        /div>
    );
};

export default CustomerRegistration;