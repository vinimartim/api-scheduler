import { Request, Response } from 'express'

import AppointmentService from '../services/AppointmentService'
import UserService from '../services/UserService'

class AppointmentController {
  
  async get(req: Request, res: Response) {
    const { id } = req.params

    const appoint = await AppointmentService.findOne(id)

    if (appoint) {
      return res.json(appoint)
    }

    return res.status(404).json({ message: 'Appointment not found' })
  }

  async getAll(req: Request, res: Response) {
    const appoints = await AppointmentService.find()

    return res.json(appoints)
  }

  async store(req: Request, res: Response) {
    const { owner: { id } } = req.body

    const userExists = await UserService.findOne(id)

    if (!userExists) {
      return res.status(404).json({ message: 'User not found'! })
    }

    const appoint = await AppointmentService.save(req.body)

    return res.json(appoint);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params

    const appoint = await AppointmentService.update(id, req.body)

    if (appoint.affected === 1) {
      const apppointUpdated = await AppointmentService.findOne(id)
      return res.json(apppointUpdated)
    }

    return res.status(404).json({ message: 'Appointment not found'})
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params

    const appoint = await AppointmentService.delete(id)

    if(appoint.affected === 1) {
       return res.json({ message: 'Appointment deleted!' })
    }

    return res.status(404).json({ message: 'Appointment not found!' })

  }
}

export default new AppointmentController()