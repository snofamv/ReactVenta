const rest = new (require('rest-mssql-nodejs'))({
    user: 'admin',
    password: '1234',
    server: 'DESKTOP-V6PCAQK', // replace this with your IP Server
    database: 'inventario',
    port: 1433, // this is optional, by default takes the port 1433
});

setTimeout(async () => {
    //const result = await rest.executeQuery('select * from productos');
    const result = await rest.executeStoredProcedure('sp_mostrarProductos');

    console.log(result.data);
}, 1500)
