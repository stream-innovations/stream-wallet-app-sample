import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, className }) => {
    return ( <
        button className = { `button ${className}` }
        onClick = { onClick } > { label } <
        /button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default Button;