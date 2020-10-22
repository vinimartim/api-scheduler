import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import User from '../models/User'
import UserService from '../services/UserService'

class UserController {
  async store(req: Request, res: Response) {
    const repository = getRepository(User)
    
    const { username } = req.body

    const userExists = await UserService.findOneByUsername(username)

    if (userExists) {
      return res.status(409).json({ message: 'User not found!' })
    }

    const user = await repository.save(req.body)

    return res.json(user)
  }
}

export default new UserController()