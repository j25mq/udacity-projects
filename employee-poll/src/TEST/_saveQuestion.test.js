const { _saveQuestion } = require("../utils/_DATA");

describe("_saveQuestion", () => {
    it("should verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.", async () =>{
        const res = await _saveQuestion({
            optionOneText: "This should be option one.",
            optionTwoText: "This should be option two.",
            author: "am8ehyc8byjqgar0jgpub9o", 
        });
        expect(res).toBeTruthy();
    });
    it("should verify that an error is returned if incorrect data is passed to the function.", async () => {
        const res = await _saveQuestion({
            optionOneText: undefined,
            optionTwoText: "This should be option two.", 
            author: "am8ehyc8byjqgar0jgpub9",
        }).catch(error => error);
        expect(res).toBe("Option One, Option Two, and an author should be present. Please provide optionOneText, optionTwoText, and author.");
    });
});