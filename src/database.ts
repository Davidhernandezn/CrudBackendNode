import * as mysql from 'promise-mysql';
import keys from './keys';

// Crear el pool de conexiones
const pool = mysql.createPool(keys.database);

async function initializeDatabase() {
    try {
        // Obtener una conexión del pool
        const connection = await (await pool).getConnection();
        console.log('DB is Connected');
        connection.release();
    } catch (error) {
        console.error('--Error al conectar a la base de datos:', error);
    }
}

// Llamar a la función initializeDatabase para inicializar la base de datos
initializeDatabase();

// Exportar el pool no es necesario si no se usa fuera de este módulo
// database.ts
export default pool;
