const request = require("supertest");
const app = require("./app"); // Import app without starting server

describe("GET /", () => {
  it('should return "Hello, DevOps!"', async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello, DevOps!");
    expect(response.status).toBe(200);
  });
});
