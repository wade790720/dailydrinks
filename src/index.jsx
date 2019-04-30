import React from "react";
import ReactDOM from "react-dom";
import Header from "modules/Header";
import Summary from "modules/Summary";
import OrderList from "modules/OrderList";
import { ADD, EDIT } from "modules/OrderList/constant";
import "normalize.css";
import "./style.sass";

class App extends React.Component {

    state = {
        list: [{
            id: 0,
            name: "peggy",
            price: "65",
            note: "sugar half",
        }, {
            id: 1,
            name: "翡翠拿鐵",
            price: "110",
            note: "半糖去冰",
        }],
    }

    add(target) {
        this.setState({
            list: [
                ...this.state.list,
                {
                    ...target,
                    id: this.state.list.length,
                    edit: false,
                },
            ]
        });
    }

    edit(target, editItem = false) {        
        this.setState({
            list: [
                ...this.state.list.map(item => target.id === item.id ? 
                    { ...target, edit: editItem || false} : 
                    item
                ),
            ]
        });
    }

    delete(target) {        
        this.setState({
            list: [
                ...this.state.list.filter(item => target.id !== item.id),
            ]
        });
    }

    handleComplete = (target, status) => {
        status === ADD && this.add(target);
        status === EDIT && this.edit(target);
    }

    handleDelete = target => {
        this.delete(target);
    }

    handleChangeMode = (target, editItem) => {
        this.edit(target, editItem);
    }

    render() {        
        return (
            <div id="wrapper">
                <Header />
                <Summary list={this.state.list} />
                <OrderList>
                    {this.state.list.map((item, inx) => (
                        item.edit ? 
                            <OrderList.EditItem
                                key={`item-${inx}`}
                                info={item}
                                onComplete={this.handleComplete}
                            /> :
                            <OrderList.ViewItem
                                key={`item-${inx}`}
                                info={item}
                                onChangeMode={this.handleChangeMode}
                                onDelete={this.handleDelete}
                            />
                    ))}
                    <OrderList.EditItem key={`add-${this.state.list.length}`} onComplete={this.handleComplete} />
                </OrderList>
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById("wrapper")
);