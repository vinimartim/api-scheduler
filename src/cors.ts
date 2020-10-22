import { NextFunction, Request, Response } from "express";
import cors from 'cors'

export default function Cors(req: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  cors()
  next()
}