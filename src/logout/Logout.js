import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Logic to handle the logout process
    // e.g., clear session, remove tokens, redirect to login page, etc.
  };

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
