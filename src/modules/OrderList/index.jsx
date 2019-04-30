import React from "react";
import PropTypes from 'prop-types';
import ViewItem from "./ViewItem";
import EditItem from "./EditItem";
import "./style.sass";

const List = props => {

    const handleBlur = e => {
        console.warn(document.activeElement);
        
        if (!e.currentTarget.contains(document.activeElement)) {
            props.onBlur();
        }
    };

    return (
        <section id="list">
            <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Note</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                { props.children }
            </tbody>
            </table>
        </section>
    );ㄊ
}

List.propTypes = {
    onBlur: PropTypes.func,
};

List.defaultProps = {
    onBlur: () => {},
};

List.ViewItem = ViewItem;
List.EditItem = EditItem;

export default List;