import React from 'react';

const TransactionsHistory = ({ transactions }) => {
    return ( <
        div >
        <
        h2 > Transaction History < /h2> {
            transactions.map((transaction) => ( <
                div key = { transaction.id } >
                <
                p > Transaction ID: { transaction.id } < /p> <
                p > Amount: { transaction.amount } < /p> <
                p > Date: { transaction.date } < /p> <
                hr / >
                <
                /div>
            ))
        } <
        /div>
    );
};

export default TransactionsHistory;