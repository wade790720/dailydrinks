import React from "react";
import { shallow } from "enzyme";
import Input from "../index";
import renderer from "react-test-renderer";

describe("Input tests", () => {
    
    it("default view", () => {
        const tree = renderer.create(
            <Input />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("onChange test", () => {
        const handleChange = jest.fn(() => {})
        const wrapper = shallow(<Input onChange={handleChange} />);
        wrapper.find("input").simulate("change", {
            target: { value: 'Changed' }
        });
        expect(handleChange.mock.calls[0][0]).toBe("Changed");
    });
});