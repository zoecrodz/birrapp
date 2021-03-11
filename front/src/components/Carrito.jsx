import { Table, TableBody, TableCell, TableContainer, Box, TableRow, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getProducts } from "../store/products"
import StarRateIcon from '@material-ui/icons/StarRate';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import productStyles from "../Styles/products"


const addToCart = (productId) => { console.log(productId) }

const TableMaterial = () => {
    const classes = productStyles()
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
            .then(productoss => console.log(productoss))
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
                            <TableCell align="center">{product.stars}</TableCell>
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