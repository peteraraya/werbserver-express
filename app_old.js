
const http = require('http');

http.createServer(( req,res) => {

    res.writeHead(200, {'Content-Type':'application/json'});
    let salida = {
        nombre: 'Pedro',
        edad  : 33,
        url: req.url
    }
    res.write( JSON.stringify(salida));
    // res.write('Hola Mundo');
    res.end(); // debemos espesificar el termino de la llamada

})
.listen(8080);


console.log('escuchando el puerto 8080');


// Paquete de tercero llamado express