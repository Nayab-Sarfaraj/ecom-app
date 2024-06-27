import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import SignUp from '../screens/SignUp'

const PrivateRoute = () => {
    const isAdmin = useSelector(state => state.loginCredentials.isAdmin)
    return (
        <>
            {
                isAdmin?<Outlet />:<SignUp />
            }
        </>
    )
}

export default PrivateRoute