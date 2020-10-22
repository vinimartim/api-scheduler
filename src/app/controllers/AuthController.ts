import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import { getRepository } from 'typeorm'

class AuthController {
  async authenticate(req: Request, res: Response) {
    const repository = getRepository(User)
    
    const { username, password } = req.body
    
    const user = await repository.findOne({ where: { username } })

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Unauthorized' })
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