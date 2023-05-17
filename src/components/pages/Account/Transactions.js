import React from 'react';

const Transactions = ({ transactions }) => {
    return ( <
        div >
        <
        h2 > Transactions < /h2> {
            transactions.map((transaction) => ( <
                div key = { transaction.id } >
                <
                p > Transaction ID: { transaction.id } < /p> <
                p > Amount: { transaction.amount } < /p> <
                p > Date: { transaction.date } < /p> <
                /div>
            ))
        } <
        /div>
    );
};

export default Transactions;