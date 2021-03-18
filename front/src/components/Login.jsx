import React, { useState } from "react";
import { loginUser, logFbUser, getFbUser } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../store/user";
import { getCarrito } from '../store/carrito';
import FacebookLogin from "react-facebook-login"




const Login = () => {
  
  const dispatch = useDispatch()
  const history = useHistory()
  const [newUser, setNewUser] = useState({})
  const user = useSelector(state => state.user)
  
  const responseFacebook = (response) => {
    dispatch(logFbUser(response))
    .then(() => dispatch(getFbUser(localStorage.getItem("id"))))
    .then(() => history.push("/"))
  }

  const componentClicked = () => {
    console.log("logueado desde facebook")
  }

  const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(loginUser(newUser)) 
  .then(() => dispatch(getUser()))
  .then((usuario) => {
    // pregunto por usuario y no por el estado user porque por alguna razon en este paso todavia no existe
    
    if (usuario.payload) {
          // console.log("usuario", usuario) 
          dispatch(getCarrito(usuario.payload.id))
          return history.push("/")
    }
  }).catch()
  }

  return (
  <div>
  <h1>BirrApp</h1>
 <img src="https://img.icons8.com/plasticine/2x/beer.png" alt=""/>
  <h3>Ingresar</h3>
  <div>
    <form onSubmit={handleSubmit}>
      <div>
        <span>Email</span>
        <br/>
        <input
          name= "email"
          type="text"
          required
          placeholder=""
          onChange={handleChange}
        />
      </div>
      <div>
      <span>Contraseña</span>
        <br/>
        <input 
          name= "password"
          type="password"
          required
          placeholder=""
          onChange={handleChange}
        />
      </div>
      <div>
        <br/>
        <button
          type="submit">
          Login
         </button>
      </div>
      <FacebookLogin
    appId="193196372226034"
    autoLoad={false}
    fields="name,email,picture"
    onClick={componentClicked}
    icon="fa-facebook"
    callback={responseFacebook} />,
    </form>
  </div>
</div>

)};
export default Login;










