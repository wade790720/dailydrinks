import React from "react";
import PropTypes from "prop-types";
import "./style.sass";

const Button = props => {
    return (
        <div>
            <button className="btn">{ props.text }</button>
        </div>
    );
};

Button.propTypes = {
    text: PropTypes.string,
};

Button.defaultProps = {
    text: "click",
}

export default Button;