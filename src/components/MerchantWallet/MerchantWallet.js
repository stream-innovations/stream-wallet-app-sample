import React, { useEffect, useState } from 'react';
import { Connection, PublicKey, Keypair, Transaction, SystemProgram } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';

const MerchantWallet = () => {
    const [walletInitialized, setWalletInitialized] = useState(false);
    const [walletBalance, setWalletBalance] = useState(null);

    useEffect(() => {
        initializeMerchantWallet();
    }, []);

    const initializeMerchantWallet = async() => {
        try {
            const connection = new Connection('https://api.solana.com');
            const newAccount = Keypair.generate();
            const token = new Token(connection, newAccount.publicKey, TOKEN_PROGRAM_ID, newAccount);

            // Mint new tokens for the merchant's wallet
            await token.mintTo(
                newAccount.publicKey,
                new PublicKey('<your-token-mint-public-key>'), [], // Specify the amount and decimals as required
                null // Provide a mint authority if needed
            );

            // Get the wallet balance
            const balance = await token.getAccountInfo(newAccount.publicKey);
            setWalletBalance(balance);

            setWalletInitialized(true);
        } catch (error) {
            console.error('Error initializing merchant wallet:', error);
        }
    };

    return ( <
        div >
        <
        h1 > Merchant Wallet < /h1> {
            walletInitialized ? ( <
                div >
                <
                p > Wallet Address: { walletBalance ? .address.toBase58() } < /p> <
                p > Wallet Balance: { walletBalance ? .amount } < /p> <
                /div>
            ) : ( <
                p > Initializing merchant wallet... < /p>
            )
        } <
        /div>
    );
};

export default MerchantWallet;