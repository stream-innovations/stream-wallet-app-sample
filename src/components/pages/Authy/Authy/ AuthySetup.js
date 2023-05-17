import React, { useState } from 'react';

const AuthySetup = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to send verification code to the provided phone number
        // Example: authyAPI.sendVerificationCode(phoneNumber);
        // Replace authyAPI with the actual library or API you are using
        // You can add additional logic to handle the response or error handling
        // After successful code sending, you can navigate the user to the verification page
    };

    return ( <
        div >
        <
        h2 > Authy Setup < /h2> <
        form onSubmit = { handleSubmit } >
        <
        label > Phone Number: < /label> <
        input type = "text"
        value = { phoneNumber }
        onChange = { handlePhoneNumberChange }
        /> <
        button type = "submit" > Send Verification Code < /button> <
        /form> <
        /div>
    );
};

export default AuthySetup;