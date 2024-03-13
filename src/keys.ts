export default { 
    database: {
        host: 'localhost',
        user: 'root',
        password: 'd1704EWQ',
        database: 'empleados',
        port: 3306
    }
}

function validarConfiguracion(configuracion: any) {
    // Verificar que todas las propiedades necesarias estén presentes
    if (!configuracion || !configuracion.database) {
        throw new Error('La configuración de la base de datos es inválida.');
    }

    const { host, user, password, database, port } = configuracion.database;

    // Verificar que todos los valores sean del tipo esperado
    if (typeof host !== 'string' || typeof user !== 'string' || typeof password !== 'string' || typeof database !== 'string' || typeof port !== 'number') {
        throw new Error('La configuración de la base de datos contiene valores inválidos.');
    }

    console.log('La configuración de la base de datos es válida.');
}

// Importar la configuración y validarla
validarConfiguracion(module.exports);
