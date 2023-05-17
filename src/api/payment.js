import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

// Create a new payment
export const createPayment = async(paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/payments`, paymentData);
        return response.data;
    } catch (error) {
        console.error('Error creating payment:', error);
        throw error;
    }
};

// Get payment details by ID
export const getPaymentById = async(paymentId) => {
    try {
        const response = await axios.get(`${API_URL}/payments/${paymentId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching payment:', error);
        throw error;
    }
};

// ... Add more payment-related API functions as needed