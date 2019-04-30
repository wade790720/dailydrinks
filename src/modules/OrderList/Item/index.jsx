import React from 'react';
import PropTypes from 'prop-types';
import EditItem from "./EditItem";
import ViewItem from "./ViewItem";
import Button from "components/Button";
import "./style.sass";

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            edit: props.info.id === -1,    
        };
    }

    switchChangeMode = () => {
        this.setState({
            edit: !this.state.edit,
        });
    }

    render() {
        return (    
            this.state.edit ? 
                <EditItem {...this.props} onChangeMode={this.switchChangeMode} /> : 
                <ViewItem {...this.props} onChangeMode={this.switchChangeMode} />
        );
    }
}

Item.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        price: PropTypes.string,
        note: PropTypes.string,
    }),
    onDelete: PropTypes.func,
};

Item.defaultProps = {
    info: {
        id: -1,
        name: "",
        price: "",
        note: "",
    },
    onDelete: () => {},
};

export default Item;