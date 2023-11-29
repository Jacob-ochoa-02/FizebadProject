const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    database: 'fizebaddatabase',
    user: 'root',
    password: 'isaac8alope',
    insecureAuth: true
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({Error: "Not logged"});
    }else {
        jwt.verify(token, "Secret-key", (err, decoded) => {
            if(err) {
                return res.json({Error: "Token is not okay"});
            } else {
                req.email = decoded.email;
                next();
            };
        });
    };
};

app.get('/verifyUser', verifyUser, (req, res)=> {
    return res.json({Status: "Success", Email: req.email});
});

app.get('/levels', (req,res)=> {
    db.query("SELECT * from levels", (err, data)=> {
        return err ? res.json(err): res.json(data)
    });
});

app.post('/signUp', async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;
    const identification = req.body.DocumentCC;
    const birthDate = req.body.Birth;
    const names = req.body.Name;
    const lastName = req.body.LastName;
    const phoneNum = (req.body.phoneNumber || null);
    const userType = (req.body.memberShips || null);
    const levelType = (req.body.lvlType || null);

    let passHash = await bcryptjs.hash(pass, 10);
    
    db.query("INSERT INTO users (Email, Password, DocumentCC, BirthDate, Name, LastName, PhoneNumber, User_Type_FK, ID_Level_FK) VALUES (?,?,?,?,?,?,?,?,?)", [email, passHash, identification, birthDate, names, lastName, phoneNum, userType, levelType], (err, data)=> {
        console.log(err);
        return err ? res.json(err): res.json(data);
    });
});

app.post('/logIn', async (req, res)=>{
    const emails = req.body.email;
    db.query("SELECT * from users where Email = ?",[emails], (err, data) => {
        if(data.length > 0) {
            bcryptjs.compare(req.body.password, data[0].Password, (errors, response) => {
                if(errors) return res.json({Error: "Password compare error"});
                if(response) {
                    const email = data[0].Email;
                    const token = jwt.sign({email}, "Secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status: "Success"})
                }else {
                    return res.json({Error: "Password not matched"});
                };
            });
        };
    });
});

app.get('/reserving', async (req, res) => {
    const emails = req.body.email;
    db.query("SELECT * from reserve LEFT JOIN users ON Email_FK = ?", [emails], (err, data) => {
        if(data.length > 0) {
            
        }else {
            return res.json({Error: "Error on fetching data from database..."});
        }
    })
})

app.listen(8000, () => {
    console.log("Server running in port http://localhost:8000/");
});
