import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";
const expect = chai.expect;

chai.use(chaiHttp);

describe("Testing home route", () => {
  it("should return status 200", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
