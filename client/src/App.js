import { Route, Routes,useNavigate, Navigate} from 'react-router-dom';
import Home from './pages/home.jsx';
import SignUp from './pages/signUp.jsx';
import LogIn from './pages/login.jsx';
import HomeLoged from './pages/homeLoged.jsx';
import { useEffect, useState } from 'react';
import NotFound from './components/notFound.jsx';
import axios from 'axios';

export default function App() {
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8000/verifyUser')
        .then(res => {
            if(res.data.Status === "Success") {
                setAuth(true);
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
                <Route path="/logIn" element={<Navigate to="/home" />} />
                <Route path="/signUp" element={<Navigate to="/home" />} />
            </>
            ):
            <>
                <Route path="/logIn" element={<LogIn />} />
                <Route path="/home" element={<Navigate to="/logIn" />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<Home />} />
            </>
            }
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}
