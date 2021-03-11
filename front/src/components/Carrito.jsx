//- Carrito: (header con usuario del pedido, lista de items, boton de confirmacion, boton hacer pedido)
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarrito } from "../store/carrito";
// import StarRateIcon from "@material-ui/icons/StarRate";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { getItemFromCarrito, deleteItemFromCarrito } from "../store/items";
import axios from "axios";
import { useState } from "react";

const StyledTableCell = withStyles(() => ({
  head: {
    color: "white",
    background: "#FF6633	",
    textAlign: "center",
  },
  body: {
    fontSize: 14,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}))(TableCell);

const Cart = ({ userId }) => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const items = useSelector((state) => state.items)

  useEffect(() => {
    dispatch(getCarrito(userId));
  }, [items]);
  const handleDelete = (item) => {
  
    const ids = { productId: item.id, cartId: carrito.id };
    // console.log("ids", ids)
    return dispatch(deleteItemFromCarrito(ids));
  };

  console.log("carro: ", carrito.items)

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Foto</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Descripcion</StyledTableCell>
              <StyledTableCell>Precio</StyledTableCell>
              <StyledTableCell>Cantidad</StyledTableCell>
              <StyledTableCell>Cambiar Cantidad</StyledTableCell>
              <StyledTableCell>Eliminar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {carrito.items
              ? carrito.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img
                        src={""}
                        width="128"
                        height="128"
                        margin="auto"
                        display="block"
                        maxWidth="100%"
                        maxHeight="100%"
                      />
                    </TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">{item.price + "$"}</TableCell>
                    <TableCell align="center">{item.item.qty}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" size="small" color="#FF6633">
                        <AddIcon />
                      </Button>
                      <Button variant="contained" size="small" color="#FF6633">
                        <RemoveIcon />
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        size="small"
                        color="#FF6633"
                        onClick={() => handleDelete(item)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Precio Total</StyledTableCell>
              <StyledTableCell>Productos</StyledTableCell>
              <StyledTableCell>Ir a pagar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>2340$</TableCell>
              <TableCell>Burga cn cheddar + Papas Grandes + Ipa</TableCell>
              <TableCell>
                <Button variant="contained" size="small" color="#FF6633">
                  Pagar
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Cart;