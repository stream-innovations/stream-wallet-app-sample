import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const POSPayments = () => {
    const [amount, setAmount] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    const [paymentToken, setPaymentToken] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleGenerateQRCode = async() => {
        try {
            // Perform necessary logic to generate payment token for merchant using SolanaPay API or library
            // Example: const paymentToken = await solanaPayAPI.generateMerchantPaymentToken(amount, merchantId);
            // Replace solanaPayAPI with the actual library or API you are using
            setPaymentToken(paymentToken);
            setShowQRCode(true);
        } catch (error) {
            console.error('Error generating payment token:', error);
        }
    };

    return ( <
        div >
        <
        h1 > POS Payments < /h1> <
        div >
        <
        label > Amount: < /label> <
        input type = "text"
        value = { amount }
        onChange = { handleAmountChange }
        /> <
        /div> <
        button onClick = { handleGenerateQRCode } > Generate QR Code < /button> {
            showQRCode && ( <
                div >
                <
                h2 > Payment QR Code < /h2> <
                QRCode value = { paymentToken }
                /> <
                /div>
            )
        } <
        /div>
    );
};

export default POSPayments;