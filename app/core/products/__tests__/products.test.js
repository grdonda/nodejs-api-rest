const supertest = require("supertest");
const app = require("../../../../api");
const request = supertest(app);

describe("GET /products", () => {

  it("should to list products", async () => {
    const res = await request.get("/products");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
  
});
