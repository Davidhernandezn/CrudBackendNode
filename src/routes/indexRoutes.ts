import { indexController } from '../controllers/index.controller';
import { Router } from 'express';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        //EJECUTAR
        this.config();
    }

    config(): void {
        //RUTAS  
        this.router.get('/', indexController.list);
        this.router.post('/registrar', indexController.create);
        this.router.put('/actualizar/:id', indexController.update);
        this.router.delete('/eliminar/:id', indexController.delete);

          //this.router.post('/', indexController.index);
           //this.router.get('/',(req, res) => res.send('Hola!!!'))
           //this.router.get('/:id', indexController.getOne);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;