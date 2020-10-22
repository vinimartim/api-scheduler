import "reflect-metadata"
import express, { NextFunction, Request, Response } from 'express'
import Cors from './cors'

import './database/connect'
import routes from './routes'

const app = express()

app.use(express.json())

app.use(Cors);
app.use(routes)

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000'))