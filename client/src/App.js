import { Route, Outlet, Routes,useNavigate, Navigate} from 'react-router-dom';
import Home from './pages/home.jsx';
import SignUp from './pages/signUp.jsx';
import LogIn from './pages/login.jsx';
import LogHomePage from './pages/logHomePage.jsx';
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

    const PrivateRoute = () => {
        return auth ? <Outlet /> : <Navigate to="/login" />;
    }

    return (
        <Routes>
          {/* Rutas públicas */}
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home" element={<PrivateRoute/>}>
                <Route path="/home" element={<LogHomePage/>}/>
            </Route>
            <Route path="*" element={<NotFound/>}/>
      
          {/* Rutas privadas */}
          {/* Otras rutas privadas aquí */}
        </Routes>
      );
}
