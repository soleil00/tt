import express, { Request, Response } from "express"

const app= express()

app.get("/",(req:Request,res:Response)=>{
  try {
    return res.status(200).json({
      message:"server is running"
    })
  } catch (error:any) {
    res.status(500).json({
      message:error.message
    })
  }
})


export default app

