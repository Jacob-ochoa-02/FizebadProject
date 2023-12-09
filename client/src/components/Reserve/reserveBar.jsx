import raquetLogo from "../../assets/images/implementRaquet.png"; 
import ballLogo from "../../assets/images/implementBall.png"; 
import ImgReserve from "../../assets/images/imgReserve.png" ;
import userLogo from '../../assets/images/avatar.png'
import { startOfDay, format, eachDayOfInterval, addWeeks } from 'date-fns';
import closeLogo from '../../assets/images/closeThings.png'
import './reserveBar.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ReserveBar({usrEmail}) {
    const [tutorsToSelect, setTutorToSelect] = useState([]);
    const [tutorReg, setTutorReg] =useState('');
    const [fields, setFields] = useState([]);
    const [click, setClick] = useState(false);
    const [days, setDays] = useState('');
    const [classHour, setHour] = useState('');
    const [fieldToSet, settingField] = useState([]);
    const [raquets, setRaquets] = useState([]);
    const [balls, setBalls] = useState([]);
    const [implement, setImplements] = useState([]);
    const [weekDays, setWeekDays] = useState([]);
    const [userInfo, setUserInfo] = useState([]);
    const [selectedButton, setSelectedButton] = useState(null);
    const [currentHour, setCurrentHour] = useState(new Date());
    const [reservesInfo, setReservesInfo] = useState([]);
    const userFees = userInfo.User_Type_FK === null ? 30000: 20000;
    const emailOf = usrEmail;
    let sched = `${days} ${classHour}`;
    let total = 0;
    const schedules = [{idSC: 1, name: '06:15'},{idSC: 2, name: '07:00'}, {idSC: 3, name: '07:45'}, {idSC:4, name:'8:30'},{idSC:5, name:'9:15'}, {idSC:6, name:'10:00'}, {idSC:7, name:'10:45'}, {idSC:8, name:'11:30'}, {idSC:9, name:'12:15'}, {idSC:10, name:'13:00'}, {idSC:11, name:'13:45'}, {idSC:12, name:'14:30'}, {idSC:13, name:'15:15'}, {idSC:14, name:'16:00'}, {idSC:15, name:'16:45'}, {idSC:16, name:'17:30'}, {idSC:17, name:'18:15'}];
    const formatingHour = (time) => {
        const hours = time.getHours();
        const mins = time.getMinutes();
        const formatedHour = `${hours < 10 ? '0' + hours : hours}:${mins < 10 ? '0' + mins : mins}`;
        return formatedHour;
    };
    
    const settingClick = () => {
        setClick(!click);
    }
    
    const settingPrices = () => {
        implement.map((ops) => {
            if(ops.ID_implement === 4){
                total += parseInt(balls) * parseInt(ops.Implement_Pricing)
            }else {
                total += parseInt(raquets) * parseInt(ops.Implement_Pricing)
            }
            return total
        })
    }

    settingPrices();

    const reservs = async() => {
        await axios.post('http://localhost:8000/reserving', {
            schedule: sched,
            field: fieldToSet,
            email: emailOf,
            pricing: total,
            turnFee: userFees,
            tutor: tutorReg
        }).then(res => {
            console.log('success')
        }).catch(err => {
            console.log('Couldn\'t send info')
        })
    }

    const plus45 = (hourToPlus) => {
        const [hours, mins] = hourToPlus.split(':');
        const time = new Date();
        time.setHours(parseInt(hours, 10));
        time.setMinutes(parseInt(mins, 10));
        time.setMinutes(time.getMinutes() +45);
        const newHours = time.getHours();
        const newMins = time.getMinutes();
        return `${newHours.toString().padStart(2, '0')}:${newMins.toString().padStart(2,'0')}`
    }
    
    useEffect(() => {
        const intervalID = setInterval(() => {
          setCurrentHour(new Date());
        }, 1000);
        return () => clearInterval(intervalID);
      }, []);

    useEffect(() => {
        const today = startOfDay(new Date());
        const oneWeekLater = addWeeks(today, 2);
        const dateRange = eachDayOfInterval({ start: today, end: oneWeekLater })
        .map(date => format(date, 'yyyy-MM-dd'));
        setWeekDays(dateRange)
    }, []);

    useEffect(() => {
        const fetchingData = async () => {
            const response = await axios.get('http://localhost:8000/tutors');
            setTutorToSelect(response.data);
        }
        fetchingData();
    }, []);

    useEffect(() => {
        const fetchingData = async () => {
            const response = await axios.get('http://localhost:8000/implements');
            setImplements(response.data);
        }
        fetchingData();
    }, []);

    useEffect(() => {
        const fetchingData = async () => {
            await axios.get('http://localhost:8000/fields')
            .then(res => {
                setFields(res.data);
            })
        }
        fetchingData()
    }, []);

    useEffect(() => {
        const fetchingData = async () => {
            await axios.post('http://localhost:8000/user', {
                email: emailOf
            })
            .then(res => {
                setUserInfo(res.data);
            })
        }
        if(emailOf) {
            fetchingData();
        }
    },[emailOf]);

    useEffect(() => {
        const fetchingData = async () => {
            await axios.get('http://localhost:8000/reserves')
            .then(res => {
                setReservesInfo(res.data);
            })
        }
        fetchingData();
    },[]);

    return (
    <div className="reserveContainer" >
        <div className="allContainer">
        <div className="leftSide">
            <h2 className={`tutorTitle ${click ? 'teachers' : ''}`} onClick={settingClick}>Deseas un Tutor?</h2>
            <div className={`tutorSpace ${click ? 'active': '' }`} >
                <div className="imageContainerOf">
                    <img className="userImage" src={userLogo} alt="" />
                </div>
                <select name="teachBox" className="teachersBox" onChange={(e) => {
                    setTutorReg(e.target.value);
                }}>
                        <option value="" defaultValue=''>Seleccione el profesor</option>
                        {tutorsToSelect.map((option) => (
                            <option value={option.email} key={option.email}>{option.Name} {option.LastName}  -  {option.puesto}</option>
                            ))}
                </select>
                <div className="closingContainer" onClick={settingClick}>
                    <img className="closingLogo" src={closeLogo} alt="closing" />
                </div>
            </div>
            <div className="schedule">
                <h1 id="timer">{formatingHour(currentHour)}</h1>
                <img id="reserImage" src={ImgReserve} alt="" />
                <hr />
                <div className="selectionPart">
                    <select name="boxOf" className="selectionBox" onChange={(e) => {
                        setDays(e.target.value);
                    }}>
                        <option value="" defaultValue=''>Seleccione el dia</option>
                        {
                            weekDays.map((options)=> (
                                <option className="optionsInput" value={options} key={options}>{options}</option>
                            ))
                        }
                    </select>
                    <select name="boxOf" className="selectionBox" onChange={(e) => {
                        settingField(e.target.value);
                    }}>
                        <option value="" defaultValue=''>Canchas</option>
                        {
                            fields.map((options)=> (
                                <option className="optionsInput" value={options.ID_field} key={options.ID_field}>{options.FieldName}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="implement">
                <h2 className="implementsTitle">Alquiler de Implementos</h2>
                <hr id=""/>
                <div className="implementsCont">
                    <div className="implementsOf raquet">
                        <img id="raquetImage" src={raquetLogo} alt="raquetLogo" />
                        <div className="quantityOf">
                            <p className="paragOf">Ingrese Cantidad:</p>
                            <input className="impInput" type="number" min='0' max={implement.find(op => op.ID_implement === 5 ) ? implement.find(op => op.ID_implement === 5).Stock : 26} value={raquets} onChange={(e) => {
                                const newValue = e.target.value;
                                const maxValue = implement.find(op => op.ID_implement === 5) ? implement.find(op => op.ID_implement === 5).Stock : 100;
                                setRaquets(newValue <= maxValue ? newValue : raquets);
                            }}/>
                        </div>
                    </div>
                    <div className="implementsOf ball">
                        <img id="ballImage" src={ballLogo} alt="ballLogo" />
                        <div className="quantityOf">
                            <p className="paragOf">Ingrese Cantidad:</p>
                            <input className="impInput" type="number" min='0' max={implement.find(op => op.ID_implement === 4 ) ? implement.find(op => op.ID_implement === 4).Stock : 100} value={balls} onChange={(e) => {
                                const newValue = e.target.value;
                                const maxValue = implement.find(op => op.ID_implement === 4) ? implement.find(op => op.ID_implement === 4).Stock : 100;
                                setBalls(newValue <= maxValue ? newValue : balls);
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="rightSide">
            <h1 className="cronoG">Cronograma</h1>
            <div className="cronogContainer">
                {
                    schedules.map((scs) => (
                        <div key={scs.idSC}>
                        <div className="firstContainer">
                            <div className="paragContain">
                                <h2 className="hourReserv">{scs.name} <p>{plus45(scs.name)} </p></h2>
                            </div>
                                <button className={`ReservarBtn ${selectedButton === scs.name ? 'desactive' : ''}`} onClick={() => {
                                    setHour(scs.name)
                                    setSelectedButton(scs.name)
                                }} type="button">Seleccionar</button>
                                <button className={`cancelar ${selectedButton === scs.name ? 'activedss' : ''}`} onClick={() => {
                                    setHour('')
                                    setSelectedButton(null)
                                }}>Cancelar</button>
                        </div>
                        <hr />
                        </div>
                        ))
                    }
                </div>
        </div>
        </div>
        <div className="confirmReserv">
            <Link disabled={(!(days === '') || !(classHour === '') ) ? true : false} className='confirmReservBtn' to="/bill" type="button"  onClick={reservs}>Confirmar Reserva</Link>
        </div>
    </div>
    )
}
