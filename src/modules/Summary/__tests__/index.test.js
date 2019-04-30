import React from "react";
import { shallow } from "enzyme";
import Summary from "../index";
import totalAmount from "../utils";
import renderer from "react-test-renderer";

jest.mock('../utils');

describe("Summary tests", () => {

    it("summary of empty list", () => {
        totalAmount.mockImplementation(() => 0);
        const tree = renderer.create(
            <Summary />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("summary of total amount", () => {
        totalAmount.mockImplementation(() => 10);
        const tree = renderer.create(
            <Summary />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("summary of price not a number", () => {
        totalAmount.mockImplementation(() => -1);
        const tree = renderer.create(
            <Summary />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});