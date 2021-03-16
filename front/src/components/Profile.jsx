import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarritosProfile } from "../store/carritosProfile";
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        flexGrow: 1,
      },
      children: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "20px",
        backgroundColor: "#A41313",
        borderRadius: "20px",
        color: "white"
      },
      cuadro: {
        padding: "20px",
        alignItems: "center"
      },
      carrito: {
        padding: theme.spacing(2), 
        alignSelf: "flex-start"
      },
}))

const Profile = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const carritos = useSelector((state) => state.carritosProfile);
  useEffect(() => {
    dispatch(getCarritosProfile(user.id));
  }, []);
  return (
    <div >
      

      <div className={classes.cuadro}>
          <div>{user.firstName} {user.lastName}</div> 
          <div >{user.email}</div>
      </div>

      <div className={classes.container}>

        {carritos.length &&
          carritos.map((carrito) => (
            <div className={classes.children}>
              <ShoppingCartIcon className={classes.carrito}/>
              <div className={classes.cuadro}>
              <div className={classes.children}>Numero de compra: {carrito.id}</div>
              <div className={classes.children}>Metodo de pago: {carrito.paymentMethod}</div>
              <div className={classes.children}>Numero de mesa: {carrito.table}</div>
              <div className={classes.children}>Total: {carrito.total} $</div>
              
              {carrito.products.map((item) => {
                return (
                  <div className={classes.children}>
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/product/${item.id}`}
                    >
                      - {item.item.qty} {item.name}
                      <br />
                    </Link>
                  </div>
                );
              })}
              </div>
              <br />
              <br />
            </div>
          ))}
        </div>
    </div>
  );
};

export default Profile;
