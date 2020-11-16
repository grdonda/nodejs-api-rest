const supertest = require("supertest");
const app = require("../../../../api");
const request = supertest(app);

describe("GET /products", () => {
  it("should to list products", async () => {
    const res = await request.get("/products");

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should to list products by id - 5fb288ad93c8bd50ec5c1e95", async () => {
    const productId = "5fb288ad93c8bd50ec5c1e95";
    const res = await request.get(`/products/${productId}`);

    expect(res.status).toBe(200);
    console.log("data", res.data);
  });

  it("should to list products with query parameters limit/page", async () => {
    const res = await request
      .get("/products")
      .query({ limit: "2" })
      .query({ page: "2" });

    expect(res.status).toBe(200);
  });
});

describe("POST /products", () => {
  it("should to create product", async () => {
    const userMock = {
      code: "test-12345",
      name: "Product test",
    };
    const res = await request.post("/products").send(userMock);
    expect(res.statusCode).toBe(200);
  });
  
});

describe("PUT /products", () => {
  it("should to update product", async () => {
    const productId = "5fb288ad93c8bd50ec5c1e95";
    const res = await request.put(`/products/${productId}`);
    const userMock = {
      code: "test-12345",
      name: "Product test updated",
    };
    expect(res.statusCode).toBe(200);
  });
});

describe("DELETE /products", () => {
  it("should be to delete user from database test", async () => {});
  it("should be to remove user setting flag removed", async () => {});
});
