import React, { useState } from "react";
import { loginUser } from "../store/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../store/user";
import { getCarrito } from '../store/carrito';


const Login = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [newUser, setNewUser] = useState({})

  const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(loginUser(newUser))
  .then(() => dispatch(getUser())) //te devuelve el usuario conectado 
  .then((user) => {
    dispatch(getCarrito(user.id))
    if (localStorage.getItem("token")){
      history.push("/")
    }
  })
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
    </form>
  </div>
</div>

)};
export default Login;
