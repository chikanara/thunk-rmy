import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../js/action/usersAction'

const Detail = ({match}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(match.params.id))
       
    }, [])
    const user = useSelector(state => state.userReducer.user)

    return (
        <div>
            <p>{user && user.name}</p>
            <p>{user && user.email}</p>
            <p>{user.phone}</p>
            <p>  {user.address && user.address.street}</p>
        </div>
    )
}

export default Detail
