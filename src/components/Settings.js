import React, { useState } from 'react';

const Settings = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    const handleNotificationsToggle = () => {
        setNotificationsEnabled(!notificationsEnabled);
    };

    const handleDarkModeToggle = () => {
        setDarkModeEnabled(!darkModeEnabled);
    };

    return ( <
        div >
        <
        h2 > Settings < /h2> <
        div >
        <
        label > Enable Notifications: < /label> <
        input type = "checkbox"
        checked = { notificationsEnabled }
        onChange = { handleNotificationsToggle }
        /> <
        /div> <
        div >
        <
        label > Enable Dark Mode: < /label> <
        input type = "checkbox"
        checked = { darkModeEnabled }
        onChange = { handleDarkModeToggle }
        /> <
        /div> <
        /div>
    );
};

export default Settings;