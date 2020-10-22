import { getRepository } from 'typeorm'
import Appointment from '../models/Appointment'

class AppointmentService {
  find () {
    return getRepository(Appointment).find()
  }

  findOne (id: string) {
    return getRepository(Appointment).findOne(id)
  }

  save (entity: Appointment) {
    return getRepository(Appointment).save(entity)
  }

  delete (id: string) {
    return getRepository(Appointment).delete(id)

  }

  update (id: string, entity: Appointment) {
    return getRepository(Appointment).update(id, entity)
  }
}

export default new AppointmentService()