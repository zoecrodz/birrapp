import React from "react";


const Register = () => {





  return (

    <div>
    <h1>BirrApp</h1>
   <img src="https://img.icons8.com/plasticine/2x/beer.png" alt=""/>
    <h3>Registrarse</h3>
    <div>
      <form>
         <div>
         <span>Nombre</span>
        <br/>
          <input
            type="text"
            required
            placeholder=""
       /*      {...firstName} */
          />
        </div>

        <div>
        <span>Apellido</span>
        <br/>
          <input
            type="text"
            required
            placeholder=""
          /*   {...lastName} */
          />
        </div>
        <div>
        <span>Email</span>
        <br/>
          <input
            type="text"
            required
            placeholder=""
         /*    {...email} */
          />
        </div>
        <div>
        <span>Contraseña</span>
        <br/>
          <input 
            type="password"
            required
            placeholder=""
          /*   {...password} */
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
