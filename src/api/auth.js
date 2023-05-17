import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your authentication API URL

// Register a new user
export const registerUser = async(userData) => {
    try {
        const response = await axios.post(`${API_URL}/auth/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

// Log in an existing user
export const loginUser = async(credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// Log out the current user
export const logoutUser = async() => {
    try {
        const response = await axios.post(`${API_URL}/auth/logout`);
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

// Get the current authenticated user
export const getCurrentUser = async() => {
    try {
        const response = await axios.get(`${API_URL}/auth/user`);
        return response.data;
    } catch (error) {
        console.error('Error getting current user:', error);
        throw error;
    }
};