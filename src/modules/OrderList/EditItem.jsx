import React from 'react';
import PropTypes from 'prop-types';
import Input from "components/Input";
import { ADD, EDIT } from "modules/OrderList/constant";
import cx from "classnames";
import "./style.sass";

const defaultValue = {
    id: -1,
    name: "",
    price: "",
    note: "",
    edit: "name",
};

class EditItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            info: props.info
        }
        this.status = props.info.id === -1 ? ADD : EDIT;
    }

    componentDidMount() {        
        this[`${this.props.info.edit}Input`].focus();
    }

    handleChange(attr, value) {
        this.setState({
            info: {
                ...this.state.info,
                [attr]: value,
            }
        });
    }

    handleKeyDown = e => {
        if (e.key !== 'Enter') return;
        if (this.nameInput.value.trim() === "") {
            this.nameInput.focus();
            return;
        }
        if (this.priceInput.value.trim() === "") {
            this.priceInput.focus();
            return;
        }
        this.props.onComplete(this.state.info, this.status);
    }

    render() {
        return (
            <tr className="edit-item">
                <td>
                    <Input
                        ref={input => this.nameInput = input}
                        type="text"
                        className={cx("item", {
                            disabled: this.props.disabled
                        })}
                        placeholder="Name(required)"
                        value={this.state.info.name}
                        required="required"
                        onChange={(value) => this.handleChange("name", value)}
                        onKeyDown={this.handleKeyDown}
                        onFocus={this.props.onFocus}
                    />
                </td>
                <td>
                    <Input
                        ref={input => this.priceInput = input}
                        type="number"
                        className={cx("item", {
                            disabled: this.props.disabled
                        })}
                        placeholder="Price(required)"
                        value={this.state.info.price}
                        onChange={(value) => this.handleChange("price", value)}
                        onKeyDown={this.handleKeyDown}
                        onFocus={this.props.onFocus}
                    />
                </td>
                <td colSpan="2">
                    <Input
                        ref={input => this.noteInput = input}
                        type="text"
                        className={cx("item", {
                            disabled: this.props.disabled
                        })}
                        placeholder="Note"
                        value={this.state.info.note}
                        onChange={(value) => this.handleChange("note", value)}
                        onKeyDown={this.handleKeyDown}
                        onFocus={this.props.onFocus}
                    />
                </td>
            </tr>
        );
    }
}

EditItem.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.string,
        note: PropTypes.string,
        edit: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.string,
        ]),
    }),
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onComplete: PropTypes.func,
};

EditItem.defaultProps = {
    info: {
        ...defaultValue,
    },
    disabled: false,
    onFocus: () => {},
    onComplete: () => {},
};

export default EditItem;