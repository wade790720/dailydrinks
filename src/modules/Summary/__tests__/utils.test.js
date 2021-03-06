import totalAmount from "../utils";

describe("Summary utils tests", () => {

    it("sum of number", () => {
        const list = [{
            price: 1,
        }, {
            price: 2,
        }];
        expect(totalAmount(list)).toBe(3);
    });

    it("sum of string", () => {
        const list = [{
            price: "1",
        }, {
            price: "2",
        }];
        expect(totalAmount(list)).toBe(3);
    });

    it("sum of text", () => {
        const list = [{
            price: "a",
        }, {
            price: "2",
        }];
        expect(totalAmount(list)).toBe(-1);
    });

    it("sum of empty list", () => {
        const list = [];
        expect(totalAmount(list)).toBe(0);
    });
});