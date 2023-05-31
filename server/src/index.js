import express from "express"
import alumnosRoutes from './routes/alumnos.routes.js'
import especialidadesRoutes from './routes/especialidades.routes.js'
import cors from 'cors'
import {PORT} from './config.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', especialidadesRoutes)
app.use('/api', alumnosRoutes)

app.listen(PORT)
console.log("server runing on port " + PORT)