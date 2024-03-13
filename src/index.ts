import express, { Application } from 'express';//IMPORTAR MODULO DE JS
import indexRoutes from './routes/indexRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{

    public app:Application;

    constructor(){
         this.app = express();
         this.config();
         this.routes();
    }

    config():void{
        //VALIDA SERVICIO
        this.app.set('port', process.env.PORT || 3000);//CONECTARSE AL PUERTO O TOMAR 3000
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());//midleware
        this.app.use(express.urlencoded({extended: false}));//formulario html
    }

    routes():void{
        this.app.use(indexRoutes);
    }

    start():void{
        //utilizamos el port E INICIALIZAR SERVIDOR
        this.app.listen(this.app.get('port'));

        //iniciar aoo
        console.log('server on port', this.app.get('port'));
    }
}

const server = new Server();
server.start();
