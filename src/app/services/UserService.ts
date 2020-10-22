import { getRepository } from "typeorm"
import User from "../models/User"

class UserService {
  find () {
    return getRepository(User).find()
  }

  findOne (id: string) {
    return getRepository(User).findOne(id)
  }

  findOneByUsername (username: string) {
    return getRepository(User).findOne(username)
  }

  save (entity: User) {
    return getRepository(User).save(entity)
  }

  delete (id: string) {
    return getRepository(User).delete(id)

  }

  update (id: string, entity: User) {
    return getRepository(User).update(id, entity)
  }
}

export default new UserService()