import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.sass";

class ListPage extends Component {
    render() {
        return (
            <article id="list-page">
                <div>
                    <Link to="/add">Create Order</Link>
                </div>
                The orders you create are shown here.
            </article>
        );
    }
}

export default ListPage;