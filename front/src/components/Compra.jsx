import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Container, Grid } from "@material-ui/core";
import { getCarrito, updateCarrito } from "../store/carrito";
import { sendEmailToUser } from "../store/emails"
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', // Fix IE 11 issue.
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
    }
}));

const Compra = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  const classes = useStyles();
  const carrito = useSelector((state) => state.carrito);
  const user = useSelector((state) => state.user);

  const [compraData, setCompraData] = useState({});
  const handleChange = e => {
    setCompraData({ ...compraData, [e.target.name]: e.target.value });
  };

  const precio = [];
  let total;

  if (carrito.items) {
    carrito.items.map((item) => {
      precio.push(item.item.qty >= 1 ? item.price * item.item.qty : 0)
    });
    total = precio.reduce((a, b) => a + b, 0);
  }

  const handlePayCarrito = (e) => {
      e.preventDefault()
      const cart = {
        state: "COMPLETED",
        id: carrito.id,
        total,
        paymentMethod: compraData.pago,
        table: Number(compraData.mesa)
      };
      let subject = `Birrap - Gran compra, Rey` 
      let text = `Su compra por un total de $${total}, ha sido realizada. Has comprado lindo ${user.firstName} ${user.lastName}.. esperamos volver a verte.`
      const emailData = { email: user.email, subject, text }
      dispatch(updateCarrito(cart)) //Cambia el estado del carrito actual a COMPLETED
        .then(() => dispatch(getCarrito(user.id))) // Inmediatamente después genera un nuevo carrito.
        .then(() => dispatch(sendEmailToUser(emailData))) // Y le envio un mail al usuario avisandole de la compra
      history.push('/');
    };
    
  
  return (
    <Container component="main" maxWidth="xs">
        <br/>
        <form noValidate onSubmit={e => handlePayCarrito(e)}>
            
        <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12} >
                <select className={classes.form} name="pago" size="1" onChange={handleChange}>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                    <option value="Tarjeta de debito">Tarjeta de debito</option>
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Pablito Tokens">Pablito Tokens</option>
                </select>
                    </Grid>
            <Grid item xs={12} className={classes.form}  >
                <label >Nº de mesa: 
                    <input type="number"
                        name="mesa"
                        onChange={handleChange}
                    />
                </label>
            </Grid>
            <Grid item xs={12} className={classes.form} >
            <ButtonGroup variant="text" aria-label="contained primary button group" size="small">
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        type="submit"
                    >
                        Confirmar compra
                    </Button>
                <Link style={{ textDecoration: "none", color: "inherit" }}
                to="/carrito">
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                    >
                        Volver al carrito
                    </Button>
                </Link>
                </ButtonGroup>
            </Grid>
            
        </Grid>
        
      </form>

    </Container>
  );
};

export default Compra;
