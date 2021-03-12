import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Admin from "./Admin";
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../store/user"





const Index = () => {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  
  useEffect(() => {
    dispatch(getUser()) //preguntar si hay carrito con estado pending y si no, crearlo. con el usuario que tengo, hacer un getCart
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/admin" render={() => <Admin />} />
        <Route path="/" render={() => <App />} />
      </Switch>
    </div>
  );
};
export default Index;
