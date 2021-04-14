import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import Header from '../components/Header'
import AppContext from '../context/AppContext';

const Register = () => {

    // extrayendo las funciones del Context
    const { register } = useContext(AppContext);

    //state de los Datos del Usuario
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    //Destructuring del state Data
    const { name, email, password, repeatPassword } = data;

    // Manejador de Cambio del State data
    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    // Funcion para enviar los datos
    const handleSubmit = () => {
        if (name.trim() === '' || email === '' || password.trim() === '' || repeatPassword.trim() === '') {
            toast.error('Todos los datos son obligatorios')
            return
        }

        if (password !== repeatPassword) {
            toast.error('Las contraseñas no son iguales.')
            return
        }

        register(email, name, password, setData);


    }
    return (
        <>
            <Header />
            <div className="justify-between flex flex-row">
                <div className="w-20 h-20 rounded-full bg-pink-600 m-1 sm:ml-10 sm:w-28 sm:h-28 lg:fixed lg:z-50 lg:top-16 lg:right-3/4 lg:mr-12 lg:w-48 lg:h-48"></div>
                <div className="w-16 h-16 rounded-full bg-blue-600 m-3 animate-pulse sm:mr-10 sm:mt-5 sm:w-20 sm:h-20 lg:fixed lg:z-50 lg:top-16 lg:left-3/4 lg:ml-12 lg:w-32 lg:h-32"></div>
            </div>

            <div className="flex flex-col bg-pink-600 rounded-3xl m-auto text-center w-11/12 sm:w-1/3 p-7 lg:mt-20">
                <h1 className="text-white font-bold text-3xl mb-2">REGISTER</h1>
                <div className="flex flex-col text-center justify-center">
                    <div>
                        <input type="text" name="name" placeholder="Name" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={name} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Email" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={email} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={password} onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" name="repeatPassword" placeholder="Repeat Password" className="rounded-md m-2 px-2 py-2 w-56 outline-none" value={repeatPassword} onChange={handleChange} />
                    </div>
                    <div>
                        <button className="text-white bg-blue-600 px-14 py-2 font-medium rounded-full mt-2 text-lg" onClick={handleSubmit}>Sign up</button>
                    </div>
                </div>
            </div>
            <div className="justify-between flex flex-row">
                <div className="w-24 h-24 rounded-full bg-blue-600 mt-5 ml-5 animate-pulse lg:fixed lg:z-50 lg:top-3/4 lg:right-3/4 lg:mr-20 lg:w-44 lg:h-44"></div>
                <div className="w-20 h-20 rounded-full bg-pink-600 m-2 sm:mr-20 sm:w-24 sm:h-24 lg:fixed lg:z-50 lg:top-3/4 lg:left-3/4 lg:ml-20 lg:w-32 lg:h-32"></div>
            </div>

        </>
    );
}

export default Register;