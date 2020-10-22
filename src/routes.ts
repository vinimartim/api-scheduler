import { Router } from 'express'
import AppointmentController from './app/controllers/AppointmentController'
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'

const router = Router()

router.post('/users', UserController.store)

router.post('/auth', AuthController.authenticate)

router.get('/events', AppointmentController.getAll)
router.get('/events/:id', AppointmentController.get)
router.post('/events', AppointmentController.store)
router.put('/events/:id', AppointmentController.update)
router.delete('/events/:id', AppointmentController.remove)


export default router
