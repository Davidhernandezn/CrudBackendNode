import { indexController } from '../controllers/index.controller';
import { Router } from 'express';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        //EJECUTAR
        this.config();
    }

    config(): void {
        //RUTA INCIAL 
    this.router.get('/', indexController.index);
       //this.router.get('/',(req, res) => res.send('Hola!!!'))

    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;