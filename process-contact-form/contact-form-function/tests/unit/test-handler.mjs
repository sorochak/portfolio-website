"use strict";

import { lambdaHandler } from "../../app.mjs";
import { expect } from "chai";
var event, context;

describe("Tests index", function () {
  before(() => {
    // Simulate a realistic request event
    event = {
      body: JSON.stringify({
        name: "Jack Sparrow",
        email: "jacksparrow@blackpearl.com",
        message: "This is a test message from the contact form.",
      }),
    };
    context = {};
  });

  it("verifies successful response", async () => {
    const result = await lambdaHandler(event, context);

    expect(result).to.be.an("object");
    expect(result.statusCode).to.equal(200);
    expect(result.body).to.be.a("string");

    let response = JSON.parse(result.body);

    expect(response).to.be.an("object");
    expect(response.message).to.equal("Email sent successfully");
  });

  it("verifies response headers", async () => {
    const result = await lambdaHandler(event, context);

    expect(result.headers).to.be.an("object");
    expect(result.headers["Access-Control-Allow-Origin"]).to.equal(
      "https://austensorochak.com"
    );
    expect(result.headers["Access-Control-Allow-Methods"]).to.equal(
      "POST,OPTIONS"
    );
    expect(result.headers["Access-Control-Allow-Headers"]).to.equal(
      "Content-Type"
    );
  });
});
