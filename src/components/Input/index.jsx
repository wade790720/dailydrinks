import React from "react";
import PropTypes from "prop-types";
import "./style.sass";

const Input = React.forwardRef((props, ref) => {
    
    const handleChange = (e) => {
        props.onChange(e.target.value);
    }

    return (
        <input
            {...props}
            ref={ref}
            onChange={handleChange}
        />
    );
});

Input.propTypes = {
    onChange: PropTypes.func,
};

Input.defaultProps = {
    onChange: () => {},
}

export default Input;