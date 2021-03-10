import React from "react";

const Login = () => {




  return (
  <div>
  <h1>BirrApp</h1>
 <img src="https://img.icons8.com/plasticine/2x/beer.png" alt=""/>
  <h3>Ingresar</h3>
  <div>
    <form>
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
