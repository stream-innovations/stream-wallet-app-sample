import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/wallet">Wallet</a>
        </li>
        <li>
          <a href="/exchange">Exchange</a>
        </li>
        <li>
          <a href="/payment">Payment</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
        <li>
          <a href="/logout">Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
