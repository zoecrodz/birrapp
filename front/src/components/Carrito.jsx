
//- Carrito: (header con usuario del pedido, lista de items, boton de confirmacion, boton hacer pedido)

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/products"
import StarRateIcon from '@material-ui/icons/StarRate';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const StyledTableCell = withStyles(() => ({
  head: {
    color: 'white',
    background: '#FF6633	',
    textAlign: 'center'
  },
  body: {
    fontSize: 14,

  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))(TableCell);

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
      .then(productoss => console.log(productoss))
  }, [])



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
            {products.map(product => (
              <TableRow key={product.id}>
                <TableCell>
                  <img src={product.pictures && product.pictures[0].url}
                    width="128" height="128" margin='auto'
                    display='block' maxWidth='100%' maxHeight='100%'
                  /></TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.description}</TableCell>
                <TableCell align="center">{product.price + "$"}</TableCell>
                <TableCell align="center">{product.stars}</TableCell>
                <TableCell align="center"><Button
                  variant="contained"
                  size="small" color="#FF6633"
                ><AddIcon />
                </Button>
                  <Button
                    variant="contained"
                    size="small" color="#FF6633"
                  ><RemoveIcon />
                  </Button></TableCell>
                <TableCell><Button variant="contained"
                  size="small" color="#FF6633" >Delete</Button></TableCell>
              </TableRow>
            ))}
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
              <TableCell><Button variant="contained"
                size="small" color="#FF6633">Pagar</Button></TableCell>


            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Cart