// import React, {useEffect} from 'react'
// import jwt_decode from 'jwt-decode'
// import { useDispatch } from 'react-redux'
// import usersAction from '../redux/actions/usersAction'

// export default function GoogleSingUp() {
//     const dispatch = useDispatch()

//     async function handleCallbackResponse(response){
//         console.log(response)
//         let userObject = jwt_decode(response.credential);
//         console.log(userObject)
//         dispatch(usersAction.singUpUser({

//         }))
        
//     }

//     useEffect(() => {
//         // Global google
//         google.accounts.id.initialize({
//             client_id: '323118145428-kv7uv19cjuhukko3ubbv5p2n4qv6a7eb.apps.googleusercontent.com',
//             callback: handleCallbackResponse
//         });

//         google.accounts.id.renderButton(
//             document.getElementById('buttonDiv'),
//             {theme: "outline", size: "medium"}
//         )
//     });

//   return (
//     <div>
//         <div id='buttonDiv'></div>
//     </div>
//   )
// }
