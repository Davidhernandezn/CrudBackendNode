import { Request, Response } from 'express';
import pool from '../database.js';

class IndexController {

    public async list(req: Request, res: Response): Promise<void> {
        const personas = await (await pool).query('SELECT * FROM datos_personales');
        res.json(personas);
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await (await pool).query('INSERT INTO datos_personales set ?', [req.body]);
        res.json({ message: 'dato guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldData= req.body;
        await (await pool).query('UPDATE datos_personales set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Dato actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await (await pool).query('DELETE FROM datos_personales WHERE id = ?', [id]);
        res.json({ message: "Dato eliminado" });
    }


}

export const indexController = new IndexController;