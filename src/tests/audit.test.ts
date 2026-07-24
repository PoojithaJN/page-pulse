import request from "supertest";
import app from "../app";

describe("Audit API", () => {
  it("should reject invalid URL", async () => {
    const response = await request(app)
      .post("/audit")
      .send({
        url: "abc"
      });

    expect(response.status).toBe(400);

    expect(response.body.success).toBe(false);
  });

  it("should audit a valid URL", async () => {
    const response = await request(app)
      .post("/audit")
      .send({
        url: "https://example.com"
      });

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);
  });
});