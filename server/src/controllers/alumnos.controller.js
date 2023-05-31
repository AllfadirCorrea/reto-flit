import {pool} from '../db.js'

export const getAlumnos = async(req, res) =>{
    try {
        const [rows] = await pool.query('SELECT alumnos.nombre, alumnos.apellido_p, alumnos.apellido_m, alumnos.n_boleta, especialidades.especialidad FROM alumnos JOIN especialidades ON alumnos.especialidad = especialidades.clave')
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong'
        })
    }
}

export const getAlumno = async(req, res) =>{
    try {
        const [rows] = await pool.query('SELECT alumnos.nombre, alumnos.apellido_p, alumnos.apellido_m, alumnos.n_boleta, especialidades.especialidad FROM alumnos JOIN especialidades ON alumnos.especialidad = especialidades.clave WHERE alumnos.n_boleta = ? ', [req.params.id])
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong ' + error
        })
    }
}

export const createAlumno = async(req, res) =>{
    try {
        /* console.log(req.body)
        res.send('Post success') */
        const {nombre, apellido_p, apellido_m, n_boleta, especialidad} = req.body
        const [rows] = await pool.query('INSERT INTO alumnos (nombre, apellido_p, apellido_m, n_boleta, especialidad) VALUES (?, ?, ?, ?, ?)', [nombre, apellido_p, apellido_m, n_boleta, especialidad])
        res.send({
            id: rows.insertId,
            nombre,
            apellido_p,
            apellido_m,
            n_boleta,
            especialidad
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong ' + error
        })
    }
}