// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// Import the ERC20 token contract
import "./Token.sol";

contract StreamFactory {
    // Store the fee percentage
    uint256 public feePercentage;

    // Store the address of the fee recipient
    address payable public feeRecipient;

    // Mapping to store the token streams
    mapping(address => Token) public tokenStreams;

    constructor(uint256 _feePercentage, address payable _feeRecipient) {
        feePercentage = _feePercentage;
        feeRecipient = _feeRecipient;
    }

    // Create a new token stream
    function createTokenStream(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) external {
        // Deploy a new ERC20 token contract
        Token token = new Token(name, symbol, initialSupply);

        // Transfer the ownership of the token to the StreamFactory contract
        token.transferOwnership(address(this));

        // Store the token stream in the mapping
        tokenStreams[address(token)] = token;
    }

    // Transfer tokens from a token stream
    function transferFromTokenStream(
        address tokenStream,
        address to,
        uint256 amount
    ) external {
        // Get the token stream contract
        Token token = tokenStreams[tokenStream];

        // Calculate the fee amount
        uint256 feeAmount = (amount * feePercentage) / 100;

        // Transfer the tokens from the token stream to the recipient
        token.transferFrom(msg.sender, to, amount);

        // Transfer the fee amount to the fee recipient
        token.transferFrom(msg.sender, feeRecipient, feeAmount);
    }
}
