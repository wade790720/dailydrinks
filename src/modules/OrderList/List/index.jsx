import React from "react";
import "./style.sass";

const List = props => {

    return (
        <section id="list">
            <table>
            <tbody>
                { props.children }
            </tbody>
            </table>
        </section>
    );ㄊ
}

export default List;