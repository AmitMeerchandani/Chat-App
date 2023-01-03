let  expect = require("expect");

var { generateMessage } = require("./message");

describe("Generate Message", () => {
  it("should generate correct message object", () => {
    let from = "BWB",
      text = "Some random text"
    message = generateMessage(from, text)
    expect.expect(typeof message.createdAt).toBe('number');
    expect.expect(message).toMatchObject({ from, text });
  });
});