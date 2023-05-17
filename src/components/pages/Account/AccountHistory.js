import React from 'react';

const AccountHistory = ({ history }) => {
    return ( <
        div >
        <
        h2 > Account History < /h2> {
            history.map((entry) => ( <
                div key = { entry.id } >
                <
                p > Entry ID: { entry.id } < /p> <
                p > Description: { entry.description } < /p> <
                p > Date: { entry.date } < /p> <
                hr / >
                <
                /div>
            ))
        } <
        /div>
    );
};

export default AccountHistory;