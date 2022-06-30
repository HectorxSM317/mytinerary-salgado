import React, { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import usersAction from '../redux/actions/usersAction'

export default function GoogleSignUp({action}) {
    const dispatch = useDispatch()
    const fn = action === 'login' ? usersAction.signInUser : usersAction.signUpUser
    console.log(fn)

    async function handleCallbackResponse(response){
        
        let userObject = jwt_decode(response.credential);
        console.log(userObject)
        dispatch(fn({
            firstName: userObject.given_name,
            lastName: userObject.family_name,
            email: userObject.email,
            password: userObject.sub,
            photoUser: userObject.picture,
            country: 'internet',
            from: "google"

        }))
        
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: '323118145428-kv7uv19cjuhukko3ubbv5p2n4qv6a7eb.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('buttonDiv'),
            {theme: "outline", size: "medium"}
        )
    });

  return (
    <div>
        <div id='buttonDiv'></div>
    </div>
  )
}
