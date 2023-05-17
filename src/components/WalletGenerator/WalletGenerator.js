import React, { useState } from 'react';
import { generateKeyPair } from '@solana/web3.js';

const WalletGenerator = () => {
    const [publicKey, setPublicKey] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    const handleGenerateWallet = () => {
        const { publicKey, secretKey } = generateKeyPair();
        setPublicKey(publicKey.toString());
        setPrivateKey(secretKey.toString());
    };

    return ( <
        div >
        <
        h1 > Wallet Generator < /h1> <
        button onClick = { handleGenerateWallet } > Generate Wallet < /button> {
            publicKey && privateKey && ( <
                div >
                <
                h2 > Generated Wallet < /h2> <
                p > Public Key: { publicKey } < /p> <
                p > Private Key: { privateKey } < /p> <
                /div>
            )
        } <
        /div>
    );
};

export default WalletGenerator;