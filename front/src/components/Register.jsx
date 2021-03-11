import React, { useState } from "react";
import { registerUser } from "../store/users"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";


const Register = () => {

  const dispatch = useDispatch()
  const history = useHistory()
  const [newUser, setNewUser] = useState({})
  const [isLogged, setIsLogged] = useState(false)

  const handleChange = (e) => {
  setNewUser({...newUser, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch(registerUser(newUser))
  .then(() => setIsLogged(true))
  .then(() => console.log(isLogged))

  if (isLogged) {
    history.push("/login")
  }

  }


  return (

    <div>
    <h1>BirrApp</h1>
   <img src="https://img.icons8.com/plasticine/2x/beer.png" alt=""/>
    <h3>Registrarse</h3>
    <div>
      <form onSubmit={handleSubmit}>
         <div>
         <span>Nombre</span>
        <br/>
          <input
            name="firstName"
            onChange={handleChange}
            type="text"
            required
            placeholder=""
          />
        </div>

        <div>
        <span>Apellido</span>
        <br/>
          <input
            name="lastName"
            onChange={handleChange}
            type="text"
            required
            placeholder=""          
          />
        </div>
        <div>
        <span>Email</span>
        <br/>
          <input
            name="email"
            onChange={handleChange}
            type="text"
            required
            placeholder=""
          />
        </div>
        <div>
        <span>Contraseña</span>
        <br/>
          <input
            name="password"
            onChange={handleChange}
            type="password"
            required
            placeholder=""
          />
        </div>
        <div>
          <button
            type="submit">
            Guardar
           </button>
        </div>
      </form>
    </div>
  </div>


  )};


export default Register;
