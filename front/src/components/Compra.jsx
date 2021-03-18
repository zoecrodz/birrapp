import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito, updateCarrito } from "../store/carrito";
import { sendEmailToUser, sendEmailToAdmin } from "../store/emails";
import { getUsers } from "../store/users"

import { Button, ButtonGroup, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  hijos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Compra = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const carrito = useSelector((state) => state.carrito);
  const user = useSelector((state) => state.user);
  const [admin, setAdmin] = useState("") 


// Busco admin en estado local para no hacer otro store mas, por ahora se usa solo aca.
  useEffect(() => {
    return dispatch(getUsers())
      .then(({ payload }) => {
        let adminUser = payload.filter(usuario => usuario.admin === true)
        setAdmin(adminUser[0])
      })
    }, [])



  let fullFilled = true;
  const [compraData, setCompraData] = useState({ pago: "Efectivo" });
  const handleChange = (e) => {
    setCompraData({ ...compraData, [e.target.name]: e.target.value });
  };
  if (compraData.pago && compraData.mesa) {
    fullFilled = false;
  }

  // lógica para setear el total de la compra en el carrito del backend
  const precio = [];
  let total;
  if (carrito.items) {
    carrito.items.map((item) => {
      precio.push(item.item.qty >= 1 ? item.price * item.item.qty : 0);
    });
    total = precio.reduce((a, b) => a + b, 0);
  }


  // 1-modifica estado del carrito 2-crea carrito nuevo 3-envia emails a user confirmando compra, y a admin avisandole de una nueva orden "WAITING" para aprobar "COMPLETED" o rechazar "REJECTED" 
  const handlePayCarrito = (e) => {
    e.preventDefault();
    const cart = {
      state: "WAITING",
      id: carrito.id,
      total,
      paymentMethod: compraData.pago,
      table: Number(compraData.mesa),
    };
    let subject = `Birrap - Gran compra, Rey`;
    let text = `Su compra por un total de $${total}, ha sido realizada. Has comprado lindo ${user.firstName} ${user.lastName}.. esperamos volver a verte.`;
    const userEmailData = { email: user.email, subject, text };
    
    const adminEmailData = { email: admin.email  }
    dispatch(updateCarrito(cart)) //Cambia el estado del carrito actual a COMPLETED
      .then(() => dispatch(getCarrito(user.id))) // Inmediatamente después genera un nuevo carrito.
      .then(() => dispatch(sendEmailToUser(userEmailData))) // Y le envio un mail al usuario avisandole de la compra
      .then(() => dispatch(sendEmailToAdmin(adminEmailData))) // le envia un mail al admin para aprobarla
      .then(() => history.push("/"))
  };

  return (
    <Container component="main" maxWidth="xs">
      <br />
      <form noValidate onSubmit={(e) => handlePayCarrito(e)}>
        <Grid container spacing={2} className={classes.form}>
          <Grid item xs={12}>
            <select
              className={classes.form}
              name="pago"
              size="1"
              onChange={handleChange}
            >
              <option value="Efectivo">Efectivo</option>
              <option value="Tarjeta de crédito">Tarjeta de crédito</option>
              <option value="Tarjeta de debito">Tarjeta de debito</option>
              <option value="Mercado Pago">Mercado Pago</option>
              <option value="Pablito Tokens">Pablito Tokens</option>
            </select>
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <label>
              Nº de mesa:
              <input type="number" name="mesa" onChange={handleChange} />
            </label>
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <ButtonGroup
              variant="text"
              aria-label="contained primary button group"
              size="small"
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/carrito"
              >
                <Button variant="outlined" size="small" color="primary">
                  Volver al carrito
                </Button>
              </Link>
              <Button
                disabled={fullFilled}
                variant="outlined"
                size="small"
                color="primary"
                type="submit"
              >
                Confirmar compra
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Compra;
