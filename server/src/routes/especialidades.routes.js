import {Router} from 'express'
import { getEspecialidades } from '../controllers/especialidades.controller.js'

const router = Router()

router.get('/especialidades', getEspecialidades)


export default router