import { Request, Response } from 'express';
import pool from '../database.js';

class IndexController {

    public async index(req: Request, res: Response) {
        try {
            const result = await (await pool).query('DESCRIBE datos_personales');
            res.json(result); // Enviar resultados de la consulta como respuesta JSON
        } catch (error) {
            console.error('Error al ejecutar la consulta:', error);
            res.status(500).json({ error: 'Ocurrió un error al procesar la solicitud' }); // Manejar errores y enviar respuesta de error al cliente
        }
    }
}

export const indexController = new IndexController();
