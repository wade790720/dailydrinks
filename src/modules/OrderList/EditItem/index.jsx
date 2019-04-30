import React from 'react';
import PropTypes from 'prop-types';
import Input from "components/Input";
import { ADD, EDIT } from "modules/OrderList/constant";

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

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {            
            this.props.onComplete(this.state.info, this.status);
        }
    }

    renderInput(inputName) {
        return (
            <Input
                ref={input => this[`${inputName}Input`] = input}
                placeholder={inputName}
                value={this.state.info[inputName]}
                onChange={(value) => this.handleChange(inputName, value)}
                onKeyDown={this.handleKeyDown}
            />
        )
    }
    render() {
        return (
            <tr className="edit-item">
                <td>{this.renderInput("name")}</td>
                <td>{this.renderInput("price")}</td>
                <td>{this.renderInput("note")}</td>
                <td></td>
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
    onComplete: PropTypes.func,
};

EditItem.defaultProps = {
    info: {
        ...defaultValue,
    },
    onComplete: () => {},
    edit: "name",
};

export default EditItem;