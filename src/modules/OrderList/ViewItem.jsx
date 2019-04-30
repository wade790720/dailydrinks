import React from 'react';
import PropTypes from 'prop-types';
import "./style.sass";

const ViewItem = props => {
    const { info } = props;
    const renderItem = itemName => {
        return (
            <td className={itemName} onClick={() => props.onSwitchEditing(info, itemName)}>
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
    onSwitchEditing: PropTypes.func,
    onDelete: PropTypes.func,
};

ViewItem.defaultProps = {
    info: {
        id: -1,
        name: "",
        price: "",
        note: "",
    },
    onSwitchEditing: () => {},
    onDelete: () => {},
};

export default ViewItem;