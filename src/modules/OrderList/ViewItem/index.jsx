import React from 'react';
import PropTypes from 'prop-types';
import Button from "components/Button";

const ViewItem = props => {
    const { info } = props;

    const handleDelete = e => {
        e.stopPropagation();
        props.onDelete(info);
    }

    const renderItem = itemName => {
        return <td className={itemName} onClick={() => props.onChangeMode(info, itemName)}>{info[itemName]}</td>
    };

    return (
        <tr className="view-item">
            {renderItem("name")}
            {renderItem("price")}
            {renderItem("note")}
            <td><Button text="DELETE" onClick={() => props.onDelete(info)}/></td>
        </tr>
    );
}

ViewItem.propTypes = {
    info: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        note: PropTypes.string.isRequired,
    }),
    onChangeMode: PropTypes.func,
    onDelete: PropTypes.func,
};

ViewItem.defaultProps = {
    info: {
        id: -1,
        name: "",
        price: "",
        note: "",
    },
    onChangeMode: () => {},
    onDelete: () => {},
};

export default ViewItem;