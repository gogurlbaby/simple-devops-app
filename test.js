const request = require("supertest");
const app = require("./app"); // Assuming app.js is in the same directory

describe("GET /", () => {
  it('should return "Hello, DevOps!"', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, DevOps!");
    expect(response.status).toBe(200);
  });
});
