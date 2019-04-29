import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "modules/Header";
import ListPage from "pages/ListPage";
import AddPage from "pages/AddPage";
import EditPage from "pages/EditPage";
import "./style.sass";

const App = () => {
    return (
        <Router>
            <Header />
            <Route exact path="/" component={ListPage} />
            <Route path="/list" component={ListPage} />
            <Route path="/add" component={AddPage} />
            <Route path="/edit" component={EditPage} />
        </Router>
    );
};

export default App;