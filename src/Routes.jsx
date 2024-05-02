import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from './components/Header/Header'
import Footer from "./components/Footer/Footer"
import Loader from './components/Loader/Loader'

const Home = lazy(() => import("./Pages/LandingPage/Home"));
const Login = lazy(() => import("./Pages/Login/Login"));
const UserRegister = lazy(() => import("./Pages/RegisterUser/Register"));
const UserDoctor = lazy(() => import("./Pages/DoctorRegister/DoctorRegister"));
const Specialities = lazy(() => import("./Pages/Speciality/Specialities"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const ChangePassword = lazy(() => import("./Pages/ChangePassword/ChangePassword"));
const Appointment = lazy(() => import("./Pages/userAppointment/Appointment"));

const App = () => {
    return (
        <Router>
            <Header />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/patient-register" element={<UserRegister />} />
                    <Route path="/doctor-register" element={<UserDoctor />} />
                    <Route path="/specialities" element={<Specialities />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/changepassword" element={<ChangePassword/>} />
                    <Route path="/appointments" element={<Appointment/>} />
                </Routes>
            </Suspense>
            <Footer />
        </Router>
    )
}

export default App;
