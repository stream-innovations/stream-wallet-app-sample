import React, { useEffect, useState } from 'react';
import { getConnection, getProgramPublicKey } from './solanaClient';

const Swap = () => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const initializeConnection = async() => {
            const connection = await getConnection();
            setConnection(connection);
        };
        initializeConnection();
    }, []);

    return ( <
        div >
        <
        h1 > Swap Component < /h1> { / * Add your swap functionality and UI here * / } < /
        div >
    );
};

export default Swap;