import React from "react";
import PropTypes from 'prop-types';
import ViewItem from "./ViewItem";
import EditItem from "./EditItem";
import "./style.sass";

const List = props => {
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

List.ViewItem = ViewItem;
List.EditItem = EditItem;

export default List;