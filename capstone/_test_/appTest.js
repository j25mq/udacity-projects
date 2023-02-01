describe("a value entered empty should be empty", () => {
    test("this value should be empty", () => {
        const value = " ";
        expect(value).toEqual(" ");
        expect(value).not.toEqual("Toronto");
    });
});