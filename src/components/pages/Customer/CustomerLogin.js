import React, { useState } from 'react';
import Navbar from '../../Navbar';

const CustomerLogin = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
    };

    return ( <
        div >
        <
        Navbar / >
        <
        h2 > Login < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Email: < /label> <
        input type = "email"
        value = { email }
        onChange = { handleEmailChange }
        /> < /
        div > <
        div >
        <
        label > Password: < /label> <
        input type = "password"
        value = { password }
        onChange = { handlePasswordChange }
        /> < /
        div > <
        button type = "submit" > Login < /button> < /
        form > <
        /div>
    );
};

export default CustomerLogin;