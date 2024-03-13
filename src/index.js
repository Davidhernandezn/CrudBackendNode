"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //IMPORTAR MODULO DE JS
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //VALIDA SERVICIO
        this.app.set('port', process.env.PORT || 3000); //CONECTARSE AL PUERTO O TOMAR 3000
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false })); //formulario html
    }
    routes() {
        this.app.use(indexRoutes_1.default);
    }
    start() {
        //utilizamos el port E INICIALIZAR SERVIDOR
        this.app.listen(this.app.get('port'));
        //iniciar aoo
        console.log('server on port', this.app.get('port'));
    }
}
const server = new Server();
server.start();
