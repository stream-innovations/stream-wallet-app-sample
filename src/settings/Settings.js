import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Security from './Security';
import Preferences from './Preferences';
import Notifications from './Notifications';
import './Settings.css';

const Settings = () => {
    return ( <
        div className = "settings-container" >
        <
        div className = "settings-sidebar" >
        <
        NavLink to = "/settings/profile"
        activeClassName = "active-link" >
        Profile <
        /NavLink> <
        NavLink to = "/settings/security"
        activeClassName = "active-link" >
        Security <
        /NavLink> <
        NavLink to = "/settings/preferences"
        activeClassName = "active-link" >
        Preferences <
        /NavLink> <
        NavLink to = "/settings/notifications"
        activeClassName = "active-link" >
        Notifications <
        /NavLink> <
        /div> <
        div className = "settings-content" >
        <
        Switch >
        <
        Route path = "/settings/profile"
        component = { Profile }
        /> <
        Route path = "/settings/security"
        component = { Security }
        /> <
        Route path = "/settings/preferences"
        component = { Preferences }
        /> <
        Route path = "/settings/notifications"
        component = { Notifications }
        /> <
        /Switch> <
        /div> <
        /div>
    );
};

export default Settings;