import React from "react";
import ReactDOM from "react-dom";
import Header from "modules/Header";
import "./style.sass";

const Application = () => {
    return (
        <article>
            <Header />
            Drinks List
        </article>
    );
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);