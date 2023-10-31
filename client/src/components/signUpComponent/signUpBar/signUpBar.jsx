import "./signUpBar.css";
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import axios from "axios";

export default function SignUpBar() {
    const [emailReg, setEmail] = useState('');
    const [passReg, setPass] = useState('');
    const [identificationReg, setIdentification] = useState('');
    const [birthDateReg, setBirthDate] = useState('');
    const [namesReg, setName] = useState('');
    const [lastNameReg, setLastName] = useState('');
    const [phoneNumReg, setphoneNumb] = useState('');
    const [levelReg, setLevel] = useState('');
    const [levelForSelect, setSelectLevel] = useState([]);
    const signUp = () => {
        Axios.post('http://localhost:8000/signUp', { 
            email: emailReg,
            password: passReg,
            DocumentCC:identificationReg,
            Birth: birthDateReg,
            Name: namesReg,
            LastName: lastNameReg,
            phoneNumber: phoneNumReg,
            lvlType: levelReg
    }).then((res) => {
        console.log(res);
    });
    }
    useEffect(()=> {
        const fetchingData = async () => {
            const response = await axios.get('http://localhost:8000/levels');
            setSelectLevel(response.data);
        }
        fetchingData();
    }, []);
    
    return (
        <div className="signUpContent">
            <div className="formContent">
                <h1>Regístrate</h1>
                <div className="forms">
                    <label htmlFor="">Nombres:</label>
                    <input type="text" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                    <label htmlFor="">Apellidos:</label>
                    <input type="text" onChange={(e) => {
                        setLastName(e.target.value);
                    }}/>
                    <label htmlFor="">Documento:</label>
                    <input type="text" onChange={(e) => {
                        setIdentification(e.target.value);
                    }}/>
                    <label htmlFor="">Teléfono/Celular:</label>
                    <input type="text" onChange={(e) => {
                        setphoneNumb(e.target.value);
                    }}/>
                    <label htmlFor="">Fecha Nacimiento:</label>
                    <input type="date" onChange={(e) => {
                        setBirthDate(e.target.value);
                    }}/>
                    <br />
                    <div></div>
                    <label htmlFor="" id='mailer'>Correo/Email:</label>
                    <input type="email" onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <label htmlFor="">Confirmar Correo:</label>
                    <input type="email" />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" onChange={(e) => {
                        setPass(e.target.value);
                    }}/>
                    <label htmlFor="">Confirmar Contraseña:</label>
                    <input type="password" />
                    <label htmlFor="">Nivel:</label>
                    <select name="selection" value={levelReg} onChange={(e)=> {
                        setLevel(e.target.value);
                    }}>
                        {levelForSelect.map((option)=>(
                            <option value={option.ID_level} key={option.ID_level}>{option.Name}</option>
                        ))}
                    </select>
                </div>
                    <button className="buttonSignUp" onClick={signUp}>Confirmar</button>
            </div>
        </div>
    )
}