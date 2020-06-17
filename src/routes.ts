import { Router } from 'express'
import UserController from './controllers/UserController'
import ProjectsController from './controllers/ProjectsController'

const router = Router()

router.get('/users', UserController.index)
router.post('/users', UserController.create)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

router.get('/projects', ProjectsController.index)
router.post('/projects', ProjectsController.create)

export default router