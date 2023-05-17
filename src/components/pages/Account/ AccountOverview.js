import React from 'react';

const AccountOverview = ({ balance, transactionHistory }) => {
    return ( <
        div >
        <
        h2 > Account Overview < /h2> <
        p > Balance: { balance } < /p> <
        h3 > Transaction History < /h3> <
        ul > {
            transactionHistory.map((transaction) => ( <
                li key = { transaction.id } >
                <
                p > Transaction ID: { transaction.id } < /p> <
                p > Amount: { transaction.amount } < /p> <
                p > Date: { transaction.date } < /p> <
                /li>
            ))
        } <
        /ul> <
        /div>
    );
};

export default AccountOverview;