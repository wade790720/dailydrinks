import React from "react";
import PropTypes from "prop-types";
import "./style.sass";

const Button = props => {
    const { text, ...otherProps } = props;
    return (
        <button className="btn" {...otherProps}>{ text }</button>
    );
};

Button.propTypes = {
    text: PropTypes.string,
};

Button.defaultProps = {
    text: "click",
}

export default Button;