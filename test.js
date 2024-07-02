const request = require("supertest");
const app = require("./index");
const assert = require("assert");

describe("GET /", function () {
  it("responds with Hello, world!", function (done) {
    request(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        assert.strictEqual(res.text, "Hello, world!");
        done();
      });
  });
});
