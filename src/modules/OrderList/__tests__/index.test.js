import React from "react";
import { shallow } from "enzyme";
import OrderList from "../index";
import renderer from "react-test-renderer";

describe("OrderList tests", () => {
    
    it("default view", () => {
        const tree = renderer.create(
            <OrderList />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});