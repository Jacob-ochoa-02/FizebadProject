const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'fizebaddatabase',
    user: 'root',
    password: 'isaac8alope',
    insecureAuth: true
});

db.connect(function(error){
    if(error) {
        throw error;
    }else {
        console.log('Succesfull conection')
    }
});

//getting users

export const getUsers = db.query((err, data) => {
    return err ? console.log(err): console.log('success');
});

db.end();