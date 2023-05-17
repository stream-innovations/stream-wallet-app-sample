const authy = require('authy')('YOUR_AUTHY_API_KEY');

const sendOTP = (phoneNumber, countryCode, callback) => {
    authy.phones().verification_start(phoneNumber, countryCode, { via: 'sms', locale: 'en' }, callback);
};

const verifyOTP = (phoneNumber, countryCode, otp, callback) => {
    authy.phones().verification_check(phoneNumber, countryCode, otp, callback);
};

module.exports = {
    sendOTP,
    verifyOTP,
};