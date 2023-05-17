import CryptoJS from 'crypto-js';

// Hashing a string
const hash = CryptoJS.SHA256('Hello, World!').toString();
console.log('Hash:', hash);

// Encrypting and decrypting data
const message = 'Sensitive data';
const secretKey = 'SecretKey123';

const encryptedData = CryptoJS.AES.encrypt(message, secretKey).toString();
console.log('Encrypted Data:', encryptedData);

const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);
console.log('Decrypted Data:', decryptedData);
