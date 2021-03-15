import { Table, TableBody, TableCell, TableContainer, Box, TableRow, Button, Typography } from '@material-ui/core';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getProducts } from "../store/products"
import { addItemToCarrito } from "../store/items"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import productStyles from "../Styles/products"
import { getCarrito } from "../store/carrito";



const TableMaterial = () => {
    const classes = productStyles()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const carrito = useSelector((state) => state.carrito);
    const user = useSelector((state) => state.user);


    const addToCart = (productId) => {
        const itemData = {
            cartId: carrito.id,
            productId,
            qty: 1
        }
        return dispatch(addItemToCarrito(itemData));
    }

    // const handleItem = (item, operation) => {
    //     const itemData = {
    //       cartId: carrito.id,
    //       productId: item.id,
    //       operation
    //     }
    //     return dispatch(modifyItem(itemData));
    //   };

    useEffect(() => {
        dispatch(getProducts())
            .then(() => dispatch(getCarrito(user.id)))
    }, [])


    return (
        <TableContainer>
            <Table>
                <TableBody >
                    {products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell><Link to={`/product/${product.id}`}><img src={product.pictures && product.pictures[0].url}
                                width="128" height="128" margin='auto'
                                display='block' maxWidth='100%' maxHeight='100%' className={classes.image}

                            /></Link>
                            </TableCell >
                            <TableCell align="center">
                                <Typography variant="h5" align="left">{product.name}</Typography>
                                <Typography varinat="h6" align="left">{product.description}</Typography>
                            </TableCell>
                            <TableCell align="center">
                                <Typography variant="h6">{product.price + "$"}</Typography>
                            </TableCell>
                            <TableCell align="center"></TableCell>
                            <TableCell align="center">
                                {localStorage.getItem("token") ? <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(product.id)}
                                >
                                    Agregar  <ShoppingCartIcon />
                                </Button> : <Button
                                    variant="contained"
                                    color="primary"
                                    disabled="true">
                                    Agregar  <ShoppingCartIcon />
                                </Button>}

                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial