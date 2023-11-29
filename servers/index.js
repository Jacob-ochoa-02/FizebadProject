const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'fizebaddatabase',
    user: 'root',
    password: 'isaac8alope',
    insecureAuth: true
});


app.get('/', (req, res) => {
    return res.json('From backend side');
});

app.post('/user', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    db.query("SELECT * from users where Email = ? AND Password = ?", [email, pass], (err, data) => {
        return err ? res.json(err) : res.json('Success');
    })
})

app.get('/levels', (req, res) => {
    db.query("SELECT * from levels", (err, data) => {
        return err ? res.json(err) : res.json(data)
    });
})

app.post('/signUp', (req, res) => {

    const email = req.body.email;
    const pass = req.body.password;
    const identification = req.body.DocumentCC;
    const birthDate = req.body.Birth;
    const names = req.body.Name;
    const lastName = req.body.LastName;
    const phoneNum = req.body.phoneNumber;
    const userType = null;
    const levelType = req.body.lvlType;

    db.query("INSERT INTO users (Email, Password, DocumentCC, BirthDate, Name, LastName, PhoneNumber, User_Type_FK, ID_Level_FK) VALUES (?,?,?,?,?,?,?,?,?)", [email, pass, identification, birthDate, names, lastName, phoneNum, userType, levelType], (err, data) => {
        console.log(err);
        return err ? res.json(err) : res.json(data);
    })
});

app.listen(8000, () => {
    console.log("Server running in port http://localhost:8000/");
});