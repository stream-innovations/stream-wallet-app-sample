import React from 'react';

const Menu = ({ handleMenuClick }) => {
    return ( <
        nav >
        <
        ul >
        <
        li >
        <
        button onClick = {
            () => handleMenuClick('home') } > Home < /button> <
        /li> <
        li >
        <
        button onClick = {
            () => handleMenuClick('profile') } > Profile < /button> <
        /li> <
        li >
        <
        button onClick = {
            () => handleMenuClick('settings') } > Settings < /button> <
        /li> <
        li >
        <
        button onClick = {
            () => handleMenuClick('logout') } > Logout < /button> <
        /li> <
        /ul> <
        /nav>
    );
};

export default Menu;