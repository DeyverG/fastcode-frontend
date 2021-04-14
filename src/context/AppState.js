import axios from 'axios';
import React, { useReducer } from 'react'
import { toast } from 'react-toastify';
import { AUTH_ERROR, AUTH_SUCCESSFUL, CLEAN_ARRAY_IMAGES, OFF_LOADING, ON_LOADING, SEARCH_TAG_SUCCESSFUL } from '../types';
import AppContext from './AppContext';
import AppReducer from './AppReducer';


const AppState = (props) => {

    const initialState = {
        user: {},
        authentication: null,
        error: null,
        spinner: false,
        images: []
    }

    //Dispatch paa ejecutar las Acciones
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //funcion para Iniciar Sesion
    const login = async (email, password) => {

        const url = `${process.env.REACT_APP_URL_BACKEND}/auth`;
        dispatch({
            type: ON_LOADING
        })

        try {
            const response = await axios.post(url, { email, password })
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            window.location.reload()
        } catch (error) {
            dispatch({
                type: OFF_LOADING
            })
            toast.error(error.response.data.msg)
        }
    }

    // Funcion para verificar Usuario
    const verifyUser = async () => {

        const token = localStorage.getItem('token');

        if (!token) {
            dispatch({
                type: AUTH_ERROR
            })
            return
        }

        const url = `${process.env.REACT_APP_URL_BACKEND}/auth`

        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            dispatch({
                type: AUTH_SUCCESSFUL,
                payload: response.data
            })
        } catch (error) {
            console.log(error.response)
        }
    }

    // Funcion de Cerrar Sesion
    const logout = () => {
        localStorage.removeItem('token');
    }

    //Funcion de Registro
    const register = async (email, nameUser, password, fn) => {

        const url = `${process.env.REACT_APP_URL_BACKEND}/users`
        dispatch({
            type: ON_LOADING
        })
        try {
            const response = await axios.post(url, { email, name: nameUser, password });
            console.log(response.data.msg);
            toast.success(response.data.msg);

            // Limpiamos el State
            fn({ name: '', password: '', email: '', repeatPassword: '' })
            dispatch({
                type: OFF_LOADING
            })

        } catch (error) {
            const arrayError = error.response.data.errors
            dispatch({
                type: OFF_LOADING
            })
            arrayError.map(error => (toast.error(error.msg)))
        }
    }

    const searchTag = async (tag) => {

        const url = `${process.env.REACT_APP_URL_BACKEND}/search/flicker`
        const token = localStorage.getItem('token')

        if (!token) {
            toast.error('Se produjo un Error vuelva a loguearse');
            return
        }
        try {
            const response = await axios.post(url, { tag }, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            if (response.data.photos.length === 0) {
                toast.error(`No se encontro nada con el Tag: ${tag}`);
                return
            }
            dispatch({
                type: SEARCH_TAG_SUCCESSFUL,
                payload: response.data.photos
            })
        } catch (error) {
            toast.error(error.response.data.msg)
            console.log(error.response)

        }
    }

    //Funcion para limpiar el Array de images
    const newSearch = () => {
        dispatch({
            type: CLEAN_ARRAY_IMAGES
        })
    }

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                authentication: state.authentication,
                error: state.error,
                spinner: state.spinner,
                images: state.images,
                login,
                verifyUser,
                logout,
                register,
                searchTag,
                newSearch
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;