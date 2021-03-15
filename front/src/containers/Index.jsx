import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../store/user"
import { getCarrito } from "../store/carrito";
import useStylesHeading from "../Styles/heading";




const Index = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const carrito = useSelector(state => state.carrito)
  const classes = useStylesHeading();
  
  useEffect(() => {
    //preguntar si hay carrito con estado pending y si no, crearlo. con el usuario que tengo, hacer un getCart
    dispatch(getUser())
    .then((usuario) => {
      console.log('INDEX USUARIO',usuario.payload);
      
      if (usuario.payload) {
            // console.log("usuario", usuario) 
            if(!carrito.id) dispatch(getCarrito(usuario.payload.id))
      }
    })
  }, [])
  
  return (
    <div>.
      <Heading />
      <div className={classes.drawerHeader} />
      {/*DrawerHeader necesario para que la navbar no pise nada  */}
      <Switch>
        <Route path="/admin" render={() => <Admin />} />
        <Route path="/" render={() => <App />} />
      </Switch>
    </div>
  );
};
export default Index;
