import React from "react";
import { shallow } from "enzyme";
import Header from "../index";
import renderer from "react-test-renderer";

describe("Header tests", () => {
    
    it("default view", () => {
        const tree = renderer.create(
            <Header />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("check test", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("header").text()).toBe("Create React App");
    });
});