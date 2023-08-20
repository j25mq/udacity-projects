const { _saveQuestionAnswer } = require("../utils/_DATA");

describe("_saveQuestionAnswer", () => {
    it("should verify that the saved question answer is returned and all expected fields are populated when correctly formatted data is passed to the function.", async () =>{
        const res = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "am8ehyc8byjqgar0jgpub9o",
            answer: "optionOne",
        });
        expect(res).toBeTruthy();
    });
    it("should verify that an error is returned if incorrect data is passed to the function.", async () => {
        const res = await _saveQuestionAnswer({
            authedUser: undefined,
            qid: "am8ehyc8byjqgar0jgpub9o",
            answer: "optionOne",
        }).catch(error => error);
        expect(res).toBe("An authentified user, a question ID, and an answer should be present. Please provide authedUser, qid, and answer.");
    });
});