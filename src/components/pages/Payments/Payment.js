import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import QrReader from 'react-qr-reader';

const Payment = () => {
    const [selectedCrypto, setSelectedCrypto] = useState(null);
    const [showQRReader, setShowQRReader] = useState(false);
    const [scannedQRCode, setScannedQRCode] = useState(null);

    const handleCryptoSelection = (crypto) => {
        setSelectedCrypto(crypto);
        setShowQRReader(true);
    };

    const handleScanQRCode = (data) => {
        if (data) {
            setScannedQRCode(data);
            setShowQRReader(false);
        }
    };

    const handleErrorQRCode = (error) => {
        console.error(error);
    };

    const generateSolanaPayQRCode = () => {
        // Logic to generate SolanaPay QR code for the selected cryptocurrency
        // Use the selectedCrypto to generate the payment QR code
        // Example: const solanaPayQRCode = solanaPayAPI.generateQRCode(selectedCrypto);
        // Replace solanaPayAPI with the actual library or API you are using
        // Store the generated QR code in a state variable
        // setSolanaPayQRCode(solanaPayQRCode);
    };

    return ( <
        div >
        <
        h1 > Select a Cryptocurrency
        for Payment < /h1> <
        ul >
        <
        li onClick = {
            () => handleCryptoSelection('USDC') } > USDC < /li> <
        li onClick = {
            () => handleCryptoSelection('EUROC') } > EUROC < /li> <
        li onClick = {
            () => handleCryptoSelection('STRM') } > STRM < /li> { /* Add more cryptocurrency options */ } <
        /ul>

        {
            showQRReader ? ( <
                div >
                <
                h2 > Scan QR Code < /h2> <
                QrReader delay = { 300 }
                onError = { handleErrorQRCode }
                onScan = { handleScanQRCode }
                style = {
                    { width: '100%' } }
                /> <
                /div>
            ) : ( <
                div >
                <
                h2 > Payment QR Code < /h2> <
                button onClick = { generateSolanaPayQRCode } > Generate QR Code < /button> {
                    scannedQRCode ? ( <
                        div >
                        <
                        h3 > Scanned QR Code: < /h3> <
                        p > { scannedQRCode } < /p> <
                        /div>
                    ) : null
                } { /* Replace <p>{solanaPayQRCode}</p> with <QRCode value={solanaPayQRCode} /> */ } <
                /div>
            )
        } <
        /div>
    );
};

export default Payment;