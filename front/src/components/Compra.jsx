import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Container, Grid, CssBaseline } from "@material-ui/core";
import { getCarrito, updateCarrito } from "../store/carrito";
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
      console.log("cart", cart)
      dispatch(updateCarrito(cart)) //Cambia el estado del carrito actual a COMPLETED
        .then(() => dispatch(getCarrito(user.id))); // Inmediatamente después genera un nuevo carrito.
    };
    
  
  return (
    <Container component="main" maxWidth="xs">
        <br/>
        <form noValidate onSubmit={e => handlePayCarrito(e)}>
            
        <Grid container spacing={2} className={classes.form}>
            <Grid item xs={12} className={classes.hijos} >
                <TextField
                    name="pago"
                    variant="outlined"
                    required
                    fullWidth
                    id="paymentMethod"
                    label="Método de pago"
                    autoFocus
                    onChange={handleChange}
                />
                    </Grid>
            <Grid item xs={12} className={classes.hijos} >
                <label>Nº de mesa: 
                <input type="number"
                    name="mesa"
                    onChange={handleChange}
                />
                </label>
            </Grid>
            <Grid item xs={12} className={classes.hijos} >
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    type="submit"
                >
                    Pagar
                </Button>
            </Grid>
        </Grid>
        
      </form>

    </Container>
  );
};

export default Compra;
