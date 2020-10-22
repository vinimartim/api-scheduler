import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import UserService from '../services/UserService'

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { username, password } = req.body
    
    const user = await UserService.findOneByUsername(username)

    if (!user) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.sendStatus(401)
    }

    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })

    // delete user.password

    return res.json({
      user,
      token
    })
  }
}

export default new AuthController()