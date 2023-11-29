import "./signUpBar.css";
import React, { useRef, useEffect, useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import axios from "axios";

const emailRGX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}[@][a-zA-Z][a-zA-Z]{4,20}[.][a-z]{2,4}$/;
const passRGX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$#%&.]).{8,20}$/;
const docRGX = /^(\d){8,15}$/;

export default function SignUpBar() {
    // const userRef = useRef();
    const errRef = useRef();

    const [emailReg, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [matchEmail, setMatchEmail] = useState('');
    const [validEmailMatch, setValidEmailMatch] = useState(false);
    const [emailMatchFocus, setEmailMatchFocus] = useState(false);

    const [passReg, setPass] = useState('');
    const [validPass, setValidPass] = useState(false);
    const [passFocus, setPassFocus] = useState(false);

    const [matchPass, setMatchPass] = useState('');
    const [validMatchPass, setValidMatchPass] = useState(false);
    const [passMatchFocus, setPassMatchFocus] = useState(false);

    const [errMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    const [identificationReg, setIdentification] = useState('');
    const [validID, setValidID] = useState(false);
    const [IDFocus, setIDFocus] = useState(false);

    const [birthDateReg, setBirthDate] = useState('');
    const [namesReg, setName] = useState('');
    const [lastNameReg, setLastName] = useState('');
    const [phoneNumReg, setphoneNumb] = useState('');
    const [levelReg, setLevel] = useState('');
    const [levelForSelect, setSelectLevel] = useState([]);
    const [memberShip, setMemberShip] = useState('');


    useEffect(() => {
        const result = emailRGX.test(emailReg);
        setValidEmail(result);
        const match = emailReg === matchEmail;
        setValidEmailMatch(match);
    }, [emailReg, matchEmail])

    useEffect(() => {
        const result = passRGX.test(passReg);
        setValidPass(result);
        const match = passReg === matchPass;
        setValidMatchPass(match);
    }, [passReg, matchPass])

    useEffect(() => {
        const result = docRGX.test(identificationReg);
        setValidID(result);
    }, [identificationReg]);

    useEffect(() => {
        setErrorMsg('');
    }, [emailReg, matchEmail, passReg, matchPass, identificationReg])

    const signUp = async () => {
        await Axios.post('http://localhost:8000/signUp', {
            email: emailReg,
            password: passReg,
            DocumentCC: identificationReg,
            Birth: birthDateReg,
            Name: namesReg,
            LastName: lastNameReg,
            phoneNumber: phoneNumReg,
            memberShips: memberShip,
            lvlType: levelReg
        }).then((res) => {
            console.log(res);
        });
    }

    useEffect(() => {
        const fetchingData = async () => {
            const response = await axios.get('http://localhost:8000/levels');
            setSelectLevel(response.data);
            console.log(response.data);
        }
        fetchingData();
    }, []);

    const member = () => {
        let parag = document.getElementById('memberParagraph');
        let memberLab = document.getElementById('memberLabel');
        let memberInp = document.getElementById('memberInput');
        parag.style.display = 'none';
        memberLab.style.display = 'block';
        memberInp.style.display = 'block';
    }

    return (
        <div className="signUpContent">
            <section className="formContent">
                <h1 className="registerSignUp">Regístrate</h1>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <form className="forms" id="signingUp" onSubmit={signUp}>
                    <label htmlFor="signUpInputs" className="signUpFormLabels ns">Nombres:</label>
                    <input type="text" required className="signUpInputs" placeholder="Ingresa tu nombre" onChange={(e) => {
                        setName(e.target.value);
                    }} />
                    <label htmlFor="signUpInputs" className="signUpFormLabels lastns">Apellidos:</label>
                    <input type="text" required className="signUpInputs" placeholder="Ingresa tus apellidos" onChange={(e) => {
                        setLastName(e.target.value);
                    }} />
                    <label htmlFor="forIDInput" className="signUpFormLabels ident">Documento(C.C):</label>
                    <input type="text"
                        className="signUpInputs"
                        id="forIDInput"
                        placeholder="Documento de identidad"
                        onChange={(e) => {
                            setIdentification(e.target.value);
                        }}
                        required
                        aria-invalid={validID ? "false" : "true"}
                    />
                    <label htmlFor="numberPhone" className="signUpFormLabels phone">Teléfono/Celular:</label>
                    <input type="text" className="signUpInputs" placeholder="Ingresa tu teléfono" onChange={(e) => {
                        setphoneNumb(e.target.value);
                    }} />
                    <label htmlFor="dateBirth" required className="signUpFormLabels birth">Fecha Nacimiento:</label>
                    <input type="date" className="signUpInputs" onChange={(e) => {
                        setBirthDate(e.target.value);
                    }} />
                    <label htmlFor="forEmailInput" className="signUpFormLabels emailLabel">
                        Correo/Email:
                        <span className={validEmail ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validEmail || !emailReg ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        id="forEmailInput"
                        placeholder="Ingresa tu Email"
                        // ref={userRef}
                        autoComplete="off"
                        className="signUpInputs emailInput"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="emailNote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                    />
                    <p id="emailNote" className={emailFocus && emailReg && !validEmail ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe iniciar con una letra.<br />
                        Letras, numeros, guiones bajos, guiones permitidos.
                    </p>
                    <br />
                    <label htmlFor="confEmailInpt" className="signUpFormLabels confEmail">
                        Conf. Email:
                        <span className={validEmailMatch && validEmail ? "valid1" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validEmailMatch || !matchEmail ? "hide" : "invalid1"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        className="signUpInputs confEmailInput"
                        placeholder="Confirma tu correo electrónico"
                        id="confEmailInpt"
                        autoComplete="off"
                        onChange={(e) => {
                            setMatchEmail(e.target.value);
                        }}
                        required
                        aria-invalid={validEmailMatch ? "false" : "true"}
                        aria-describedby="confirmEmailNote"
                        onFocus={() => setEmailMatchFocus(true)}
                        onBlur={() => setEmailMatchFocus(false)}
                    />
                    <p id="confirmEmailNote" className={emailMatchFocus && !validEmailMatch ? "instructions1" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first email input field.
                    </p>
                    <label htmlFor="forPassInput" className="signUpFormLabels passLabel">
                        Contraseña:
                        <span className={validPass ? "valid2" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPass || !passReg ? "hide" : "invalid2"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input type="password"
                        className="signUpInputs passInput"
                        placeholder="Ingresa tu contraseña"
                        id="forPassInput"
                        onChange={(e) => {
                            setPass(e.target.value);
                        }}
                        required
                        aria-invalid={validPass ? "false" : "true"}
                        aria-describedby="passNote"
                        onFocus={() => setPassFocus(true)}
                        onBlur={() => setPassFocus(false)}
                    />
                    <p id="passNote" className={passFocus && !validPass ? "instructions2" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Debe contenter 8 a 24 caracteres.<br />
                        Debe incluir Mayúsculas y minúsculas, un número y un carácter especial.<br />
                        Carácteres especiales permitidos: <span aria-label="exclamation mark">!</span>
                        <span aria-label="at symbol">@</span>
                        <span aria-label="hashtag">#</span>
                        <span aria-label="dollar sign">$</span>
                        <span aria-label="percent">%</span>
                        <span aria-label="dot">.</span>
                    </p>
                    <label htmlFor="confPassInpt" className="signUpFormLabels passConfLabel">
                        Conf. Contraseña:
                        <span className={validMatchPass && matchPass ? "valid2" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validMatchPass || !matchPass ? "hide" : "invalid3"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="signUpInputs confPassInput"
                        id="confPassInpt"
                        onChange={(e) => {
                            setMatchPass(e.target.value);
                        }}
                        required
                        aria-invalid={validMatchPass ? "false" : "true"}
                        aria-describedby="confirmPassNote"
                        onFocus={() => setPassMatchFocus(true)}
                        onBlur={() => setPassMatchFocus(false)}
                    />
                    <p id="confirmPassNote" className={passMatchFocus && !validMatchPass ? "instructions3" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p>
                    <label htmlFor="lvlInpt" className="signUpFormLabels lvlLabel">Nivel:</label>
                    <select name="selection" className='lvlSelectInput lvlInput' value={levelReg} onChange={(e) => {
                        setLevel(e.target.value);
                    }}>
                        {levelForSelect.map((option) => (
                            <option value={option.ID_level} key={option.ID_level}>{option.Name}</option>
                        ))}
                    </select>
                    <p id="memberParagraph" onClick={member}>¿Ya eres miembro?</p>
                    <label htmlFor="memberInput" id="memberLabel"> Código Miembro:</label>
                    <input type="text" id="memberInput" onChange={(e) => {
                        setMemberShip(e.target.value);
                    }} />
                </form>
                <button disabled={!namesReg || !lastNameReg || !validID || !validEmail || !validPass || !validEmailMatch || !validMatchPass ? true : false} className="buttonSignUp" form="signingUp" >Confirmar</button>
            </section>
        </div>
    )
}