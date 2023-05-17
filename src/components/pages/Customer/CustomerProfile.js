import React from 'react';

const CustomerProfile = ({ customer }) => {
    return ( <
        div >
        <
        h2 > Profile < /h2> <
        div >
        <
        label > Name: < /label> <
        span > { customer.name } < /span> <
        /div> <
        div >
        <
        label > Email: < /label> <
        span > { customer.email } < /span> <
        /div> { /* Add more profile details as needed */ } <
        /div>
    );
};

export default CustomerProfile;