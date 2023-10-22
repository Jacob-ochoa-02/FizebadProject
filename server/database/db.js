let mysql = require('mysql');

let conection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'fizebaddatabase',
    user: 'root',
    password: 'isaac8alope',
    insecureAuth: true
});

conection.connect(function(error){
    if(error) {
        throw error;
    }else {
        console.log('Succesfull conection')
    }
});

conection.end()