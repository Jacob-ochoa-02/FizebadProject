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
    methods: ["POST", "GET", "PUT"],
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

app.post('/logIn', (req, res)=>{
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

app.get('/tutors', (req, res) => {
    db.query("SELECT * FROM users u RIGHT JOIN user_type ut ON User_Type_FK = ID_User_Type where ut.puesto = ('Monitor' OR 'Cadi' OR 'Profesor') AND u.name IS NOT NULL", (err, data)=> {
        return err ? res.json(err): res.json(data);
    });
});

app.post('/user', (req, res) =>{
    const email = req.body.email;
    db.query("SELECT * FROM users WHERE Email = ?", [email], (err, data) => {
        if(data.length > 0) {
            return err ? res.json(err): res.json(data);
        }
    })
})

app.get('/implements', (req, res) => {
    db.query("SELECT * FROM implements", (err, data) => {
        return err ? res.json(err): res.json(data);
    });
});

app.get('/fields', (req, res) => {
    db.query("SELECT * FROM fields", (err, data) => {
        return err ? res.json(err): res.json(data);
    });
});


app.get('/reserves', (req, res) => {
    db.query("SELECT * FROM reserve", (err, data) => {
        return err ? res.json(err): res.json(data);
    })
})

app.post('/reservesTo', (req, res) => {
    const email = req.body.email;
    db.query("SELECT * FROM reserve where Email_FK = ?", [email], (err, data) => {
        return err ? res.json(err): res.json(data);
    })
})

app.post('/reserving', verifyUser,(req, res) => {
    const schedule = req.body.schedule;
    const field = req.body.field;
    const email = req.body.email;
    const pricing = req.body.pricing;
    const turnFee = req.body.turnFee;
    const tutor = req.body.tutor;
    db.query("INSERT INTO reserve (ReservationHour, Field_FK, Email_FK, Implements_FK, TurnFee, tutor) VALUES (?, ?, ?, ?, ?, ?)", [schedule, field, email, pricing, turnFee, tutor], (err, data) => {
        return err ? res.json(err): res.json(data);
    })
})

app.listen(8000, () => {
    console.log("Server running in port http://localhost:8000/");
});
