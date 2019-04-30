import React from 'react';
import PropTypes from 'prop-types';
// import Button from "components/Button";
import trashSvg from "./trash.svg";
import "./style.sass";

const ViewItem = props => {
    const { info } = props;

    const handleDelete = e => {
        e.stopPropagation();
        props.onDelete(info);
    }

    const renderItem = itemName => {
        return (
            <td className={itemName} onClick={() => props.onChangeMode(info, itemName)}>
                <div className="item">{info[itemName]}</div>
            </td>
        )
    };

    return (
        <tr className="view-item">
            {renderItem("name")}
            {renderItem("price")}
            {renderItem("note")}
            <td className="action">
                <a title="Delete" onClick={() => props.onDelete(info)}>
                    <i className="icon-delete"></i>
                </a>
            </td>
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