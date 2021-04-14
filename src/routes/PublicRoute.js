import React, { useContext, useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router';
import Loading from '../components/Loading';
import AppContext from '../context/AppContext';

const PublicRoute = ({ component: Component, ...rest }) => {

    const { authentication, verifyUser } = useContext(AppContext);
    const [flag, setFlag] = useState(true);
    useEffect(() => {
        if (flag) {
            const fn = async () => {
                await verifyUser()
            }
            fn()
            setFlag(false)
        }
    }, [flag, setFlag, verifyUser]);
    if (authentication === null) return <Loading/>
    return (
        <Route {...rest} render={props => (
            authentication ? <Redirect to="/" /> : <Component {...props} />
        )} />
    );
}

export default PublicRoute;