import React from 'react';
import PropTypes from 'prop-types';
import "./style.sass";

const ViewItem = props => {
    const { info } = props;
    return (
        <tr className="view-item">
            <td className="name" onClick={() => props.onSwitchEditing(info, "name")}>
                <div className="item">{info.name}</div>
            </td>
            <td className="price" onClick={() => props.onSwitchEditing(info, "price")}>
                <div className="item">{info.price}</div>
            </td>
            <td className="note" onClick={() => props.onSwitchEditing(info, "note")}>
                <div className="item">{info.note}</div>
            </td>
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