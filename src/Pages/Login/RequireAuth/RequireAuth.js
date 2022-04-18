import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../../../Firebase/firebase.init'
import LoadingSpinner from '../../Shared/LoadingSpinner/LoadingSpinner'

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()

    if (loading) {
        return <LoadingSpinner /> //while state is loading, LoadingSpinner will be rendered
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
        // if user isn't logged in, then user will be transferred to Login page being updated the useLocation hook's state props.
    }

    return children //user logged in and get access to the private route
}

export default RequireAuth
