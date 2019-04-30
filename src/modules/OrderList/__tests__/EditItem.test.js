import React from "react";
import { mount } from "enzyme";
import EditItem from "../EditItem";
import renderer from "react-test-renderer";

const info = {
    id: 1,
    name: "Tea",
    price: "100",
    note: "half sugar",
    edit: "price",
};

const createNodeMock = () => ({ focus: () => {} });

describe("EditItem tests", () => {
    
    it("add view", () => {
        const tree = renderer.create(
            <EditItem />,
            { createNodeMock }
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("edit view", () => {
        const tree = renderer.create(
            <EditItem info={info} />,
            { createNodeMock }
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("disabled view", () => {
        const tree = renderer.create(
            <EditItem info={info} disabled={true} />,
            { createNodeMock }
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("onFocus test", () => {
        const handleFocus = jest.fn(() => {})
        const wrapper = mount(<EditItem info={info} onFocus={handleFocus} />);
        
        wrapper.find(".name").at(0).simulate("focus");
        expect(handleFocus.mock.calls.length).toBe(1);
    });

    it("onComplete test", () => {
        const handleComplete = jest.fn(() => {})
        const wrapper = mount(<EditItem onComplete={handleComplete} />);

        wrapper.find(".name").at(0).simulate("keydown", { key: '1' });
        expect(handleComplete.mock.calls.length).toBe(0);

        wrapper.find(".name").at(0).simulate("keydown", { key: 'Enter' });
        expect(handleComplete.mock.calls.length).toBe(0);

        wrapper.find(".name").at(0).simulate("change", { target: { value: info.name } });
        wrapper.find(".name").at(0).simulate("keydown", { key: 'Enter' });
        expect(handleComplete.mock.calls.length).toBe(0);

        wrapper.find(".price").at(0).simulate("change", { target: { value: info.price } });
        wrapper.find(".price").at(0).simulate("keydown", { key: 'Enter' });
        expect(handleComplete.mock.calls.length).toBe(1);
    });
});