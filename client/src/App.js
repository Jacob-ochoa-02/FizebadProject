import { Route, Routes,useNavigate, Navigate} from 'react-router-dom';
import Home from './pages/home.jsx';
import SignUp from './pages/signUp.jsx';
import LogIn from './pages/login.jsx';
import HomeLoged from './pages/homeLoged.jsx';
import { useEffect, useState } from 'react';
import NotFoundPage from './pages/notFoundPage.jsx';
import axios from 'axios';
import Reserve from './pages/reserve.jsx';
import Bill from './pages/bill.jsx';

export default function App() {
    const [auth, setAuth] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    useEffect( () => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/verifyUser')
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setUserEmail(res.data.Email);
                } else {
                    setAuth(false);
                    console.log('something is wrong');
                }
            })
            .catch(err => {
                setAuth(false);
            });
    }, [navigate, auth]);
    

    return (
        <Routes>
            {auth ? (
            <>
                <Route path="/home" element={<HomeLoged />} />
                <Route path="/reserve" element={<Reserve userEmail={userEmail}/>} />
                <Route path="/bill" element={<Bill userEmail={userEmail}/>} />
                <Route path="/logIn" element={<Navigate to="/home" />} />
                <Route path="/signUp" element={<Navigate to="/home" />} />
                <Route path="/" element={<Navigate to="/home" />} />
            </>
            ):
            <>
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/home" element={<Navigate to="/logIn" />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<NotFoundPage />} />
            </>
            }
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );
}
