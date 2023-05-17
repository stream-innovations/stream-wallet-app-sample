import { Connection, PublicKey } from '@solana/web3.js';

const clusterUrl = '<https://api.mainnet-beta.solana.com'; > // Update with your desired Solana network

export const getConnection = async() => {
    const connection = new Connection(clusterUrl, 'confirmed');
    const version = await connection.getVersion();
    console.log('Solana cluster version:', version);
    return connection;
};

export const getProgramPublicKey = () => {
    const programPublicKey = new PublicKey('4xy2QAZ65wxXL8YFPsxHPQD6XxYDRsTJKzGMUZreGW8R'); // Replace with your program's public key
    return programPublicKey;
};