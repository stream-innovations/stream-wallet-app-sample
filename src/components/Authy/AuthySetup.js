import React, { useState } from 'react';

const AuthySetup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAuthySetup = () => {
        // Logic to setup Authy with the provided phone number
        // You can use an API or library to handle the Authy integration
        // Example: authyAPI.setup(phoneNumber);
        // Replace authyAPI with the actual library or API you are using
    };

    return ( <
        div >
        <
        h2 > Authy Setup < /h2> <
        form onSubmit = { handleAuthySetup } >
        <
        div >
        <
        label > Phone Number: < /label> <
        input type = "text"
        value = { phoneNumber }
        onChange = { handlePhoneNumberChange }
        /> <
        /div> <
        button type = "submit" > Setup Authy < /button> <
        /form> <
        /div>
    );
};

export default AuthySetup;