import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, disabled }) => {
    return ( <
        button onClick = { onClick }
        disabled = { disabled } > { text } <
        /button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;