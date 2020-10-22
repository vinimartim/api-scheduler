import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Appointment from '../../app/models/Appointment'

class AppointmentController {
  
  async get(req: Request, res: Response) {
    const repository = getRepository(Appointment)

    const { id } = req.params

    const appoint = await repository.findOne({ where: { id } })

    if (appoint) {
      return res.json(appoint)
    }

    return res.status(404).json({ message: 'Appointment not found' })
  }

  async getAll(req: Request, res: Response) {
    const repository = getRepository(Appointment)

    const appoints = await repository.find()

    return res.json(appoints)
  }

  async store(req: Request, res: Response) {
    const repository = getRepository(Appointment)

    const { owner: { id } } = req.body

    const userExists = await repository.findOne(id)

    if (!userExists) {
      return res.status(404).json({ message: 'User not found'! })
    }

    const appoint = await repository.save(req.body)

    return res.json(appoint);
  }

  async update(req: Request, res: Response) {
    const repository = getRepository(Appointment)

    const { id } = req.params

    const appoint = await repository.update(id, req.body)

    if (appoint.affected === 1) {
      const apppointUpdated = await repository.findOne(id)
      return res.json(apppointUpdated)
    }

    return res.status(404).json({ message: 'Appointment not found'})
  }

  async remove(req: Request, res: Response) {
    const repository = getRepository(Appointment)

    const { id } = req.params

    const appoint = await repository.delete(id)

    if(appoint.affected === 1) {
       return res.json({ message: 'Appointment deleted!' })
    }

    return res.status(404).json({ message: 'Appointment not found!' })

  }
}

export default new AppointmentController()