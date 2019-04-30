import React from "react";
import { shallow } from "enzyme";
import ViewItem from "../ViewItem";
import renderer from "react-test-renderer";

const info = {
    name: "Tea",
    price: "100",
    note: "half sugar",
};

describe("ViewItem tests", () => {
    
    it("default view", () => {
        const tree = renderer.create(
            <ViewItem info={info} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("onSwitchEditing test", () => {
        const handleSwitchEditing = jest.fn(() => {})
        const wrapper = shallow(<ViewItem info={info} onSwitchEditing={handleSwitchEditing} />);
        
        wrapper.find(".name").simulate("click");
        expect(handleSwitchEditing.mock.calls[0][0]).toBe(info);
        expect(handleSwitchEditing.mock.calls[0][1]).toBe("name");

        wrapper.find(".price").simulate("click");
        expect(handleSwitchEditing.mock.calls[1][0]).toBe(info);
        expect(handleSwitchEditing.mock.calls[1][1]).toBe("price");

        wrapper.find(".note").simulate("click");
        expect(handleSwitchEditing.mock.calls[2][0]).toBe(info);
        expect(handleSwitchEditing.mock.calls[2][1]).toBe("note");
    });

    it("onDelete test", () => {
        const handleDelete = jest.fn(() => {})
        const wrapper = shallow(<ViewItem info={info} onDelete={handleDelete} />);

        wrapper.find(".action a").simulate("click");
        expect(handleDelete.mock.calls[0][0]).toBe(info);
    });
});