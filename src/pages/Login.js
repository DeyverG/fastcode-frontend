import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Header from '../components/Header'
import Loading from '../components/Loading';
import AppContext from '../context/AppContext';

const Login = () => {

    //sacando los datos del Context
    const { login, mailResetPass } = useContext(AppContext);

    //state de los datos
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    //State reset password
    const [onReset, setOnReset] = useState(false)

    //Destructuring del state
    const { email, password } = data

    // funcion que manejara el cambio del state
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    //Funcion para enviar Datos e iniciar Sesion
    const handleSubmit = () => {
        if (email.trim() === '' || password.trim() === '') {
            toast.error("Todos los datos son Obligatorios.")
            return;
        }
        login(email, password);

    }

    //Funcion para Correo Reset Password
    const handleSubmitMail = () => {
        if (email.trim() === '') {
            toast.error('El campo Email es obligatorio');
            return
        }
        mailResetPass(email)
    }
    return (
        <>
            <Loading />
            <Header />
            <div className="justify-between flex flex-row">
                <div className="w-24 h-24 rounded-full bg-blue-600 m-3 sm:ml-10 sm:w-28 sm:h-28 lg:fixed lg:z-30 lg:top-16 lg:right-3/4 lg:mr-12 lg:w-48 lg:h-48"></div>
                <div className="w-20 h-20 rounded-full bg-pink-600 m-6 animate-pulse sm:mr-10 sm:mt-5 sm:w-20 sm:h-20 lg:fixed lg:z-30 lg:top-16 lg:left-3/4 lg:ml-12 lg:w-32 lg:h-32"></div>
            </div>
            {!onReset ?

                <div className="flex flex-col bg-blue-600 rounded-3xl m-auto text-center w-11/12 p-7 sm:w-2/4 lg:w-1/3 lg:mt-20">
                    <h1 className="text-white font-bold text-3xl mt-3 mb-5 ">LOGIN</h1>
                    <div className="flex flex-col text-center justify-center">
                        <div>
                            <input type="text" name="email" placeholder="Email" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={email} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={password} onChange={handleChange} />
                        </div>
                        <div className="m-auto">
                            <p className="text-sm text-white cursor-pointer hover:text-pink-600 w-28" onClick={() => setOnReset(true)}>Forgot password?</p>
                        </div>
                        <div>
                            <button className="text-white bg-pink-600 px-14 py-2 font-medium rounded-full mt-2 text-lg" onClick={handleSubmit}>Sign in</button>
                        </div>
                    </div>
                </div>
                :
                <div className="flex flex-col bg-blue-600 rounded-3xl m-auto text-center w-11/12 p-7 sm:w-1/3 lg:mt-20">

                    <button className="text-white bg-pink-600 w-16 font-medium rounded-full text-md" onClick={() => setOnReset(false)}>Back</button>

                    <h1 className="text-white font-bold text-3xl mt-3 mb-5 uppercase">Reset your password</h1>
                    <div className="flex flex-col text-center justify-center">
                        <div>
                            <input type="text" name="email" placeholder="Email" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={email} onChange={handleChange} />
                        </div>
                        <div>
                            <button className="text-white bg-pink-600 px-14 py-2 font-medium rounded-full mt-2 text-lg" onClick={handleSubmitMail}>Send Email</button>
                        </div>


                    </div>
                </div>
            }
            <div className="justify-between flex flex-row">
                <div className="w-32 h-32 rounded-full bg-pink-600 m-5 animate-pulse lg:fixed lg:z-30 lg:top-3/4 lg:right-3/4 lg:w-44 lg:h-44"></div>
                <div className="w-24 h-24 rounded-full bg-blue-600 m-2 sm:mr-20 sm:w-24 sm:h-24 lg:fixed lg:z-30 lg:top-3/4 lg:left-3/4 lg:w-32 lg:h-32"></div>
            </div>

        </>
    );
}

export default Login;