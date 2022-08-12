const { name, height, message } = require("../index.js");
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan');
    });
  });


  describe("Height", () => {
    it("is less than 40", () => {
      expect(39).toBeLessThan(40);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude("Susan");
      expect(message).toInclude(39);
    });
  });