import {Router} from 'express'
import { getAlumnos, createAlumno, getAlumno } from '../controllers/alumnos.controller.js'

const router = Router()

router.get('/alumnos', getAlumnos)
router.get('/alumnos/:id', getAlumno)
router.post('/alumnos', createAlumno)

export default router