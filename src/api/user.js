import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with your API URL

// Fetch user information by ID
export const getUserById = async(userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};

// Update user profile
export const updateUserProfile = async(userId, data) => {
    try {
        const response = await axios.put(`${API_URL}/users/${userId}`, data);
        return response.data;
    } catch (error) {
        console.error('Error updating user profile:', error);
        throw error;
    }
};

// ... Add more user-related API functions as needed