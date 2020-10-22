import { Router } from 'express'
import authMiddleware from './app/middlewares/authMiddleware'
import AppointmentController from './app/controllers/AppointmentController'
import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'

const router = Router()

router.post('/auth', AuthController.authenticate)
router.post('/users', UserController.store)

router.get('/events', authMiddleware, AppointmentController.getAll)
router.get('/events/:id', authMiddleware, AppointmentController.get)
router.post('/events', authMiddleware, AppointmentController.store)
router.put('/events/:id', authMiddleware, AppointmentController.update)
router.delete('/events/:id', authMiddleware, AppointmentController.remove)

export default router
