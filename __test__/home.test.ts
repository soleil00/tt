import request from "supertest"
import {beforeAll,afterAll,jest,expect,test} from "@jest/globals"
import app from "../app"

describe("Testing homepage",()=>{
  test("Should return 200 statusCode",async()=>{
    const response = await request(app).get("/")
    expect(response.body.message).toBe(`server is running`)
  },10000)
})