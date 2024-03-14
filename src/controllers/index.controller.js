"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const database_js_1 = __importDefault(require("../database.js"));
class IndexController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personas = yield (yield database_js_1.default).query('SELECT * FROM datos_personales');
            res.json(personas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (yield database_js_1.default).query('INSERT INTO datos_personales set ?', [req.body]);
            res.json({ message: 'dato guardado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldData = req.body;
            yield (yield database_js_1.default).query('UPDATE datos_personales set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "Dato actualizado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_js_1.default).query('DELETE FROM datos_personales WHERE id = ?', [id]);
            res.json({ message: "Dato eliminado" });
        });
    }
}
exports.indexController = new IndexController;
