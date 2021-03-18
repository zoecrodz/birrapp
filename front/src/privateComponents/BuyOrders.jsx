import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/orders";
import { updateCarrito } from "../store/carrito";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "@material-ui/core";

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
    color: "white",
    fontSize: "120%",
  },
  cuadro: {
    padding: "20px",
    alignItems: "center",
  },
  carrito: {
    padding: theme.spacing(2),
    alignSelf: "flex-start",
  },
  waiting: {
    backgroundColor: "blue",
  },
  completed: {
    backgroundColor: "green",
  },
  rejected: {
    backgroundColor: "red",
  },
}));

const BuyOrders = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const carritos = useSelector(state => state.orders);
  const user = useSelector(state => state.user);
  const [effect, setEffect] = useState({})
  useEffect(() => {
    dispatch(getOrders());
  }, [effect]);
  
  let status;

  const handlePayCarrito = (state, carrito) => {
    let cart = {
      state,
      id: carrito.id,
    }
    
    dispatch(updateCarrito(cart))
      .then(() => {
        setEffect([])
      })
  }


  return (
    <div>
      

      <div className={classes.container}>
        {carritos.length &&
          carritos.map(carrito => (
            <div className={classes.children}>
              <ShoppingCartIcon className={classes.carrito} />
              <div className={classes.cuadro}>
                <div className={classes.children}>
                  Numero de compra: {carrito.id}
                </div>
                <div className={classes.children}>
                  Metodo de pago: {carrito.paymentMethod}
                </div>
                <div className={classes.children}>
                  Numero de mesa: {carrito.table}
                </div>
                <div className={classes.children}>
                  Usuario: {carrito.userId}
                </div>

                <div className={classes.children}>Total: ${carrito.total}</div>

                
                    <div >
                        Estado: {carrito.state}
                    </div>
                
                <Button className={(classes.children, classes.completed)} variant="outlined" color="secondary"
                onClick={() => handlePayCarrito("COMPLETED", carrito)}
                >
                    <div >
                        Completed
                    </div>
                </Button>
                <Button className={(classes.children, classes.completed)} variant="outlined" color="secondary"
                onClick={() => handlePayCarrito("REJECTED", carrito)}
                >
                    <div >
                        Rejected
                    </div>
                </Button>
              </div>
              <br />
              <br />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BuyOrders;
