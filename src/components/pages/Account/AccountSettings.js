import React, { useState } from 'react';

const AccountSettings = ({ username, email }) => {
    const [newUsername, setNewUsername] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleUsernameChange = (e) => {
        setNewUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setNewEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and update user settings
        // Example: updateUserSettings(newUsername, newEmail);
        // Replace updateUserSettings with the actual function that updates the user settings
    };

    return ( <
        div >
        <
        h2 > Account Settings < /h2> <
        form onSubmit = { handleSubmit } >
        <
        div >
        <
        label > Username: < /label> <
        input type = "text"
        value = { newUsername }
        onChange = { handleUsernameChange }
        /> <
        /div> <
        div >
        <
        label > Email: < /label> <
        input type = "email"
        value = { newEmail }
        onChange = { handleEmailChange }
        /> <
        /div> <
        button type = "submit" > Save Changes < /button> <
        /form> <
        /div>
    );
};

export default AccountSettings;