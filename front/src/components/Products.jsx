import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/products"
import StarRateIcon from '@material-ui/icons/StarRate';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

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

const TableMaterial = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
            .then(productoss => console.log(productoss))
    }, [])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Foto</StyledTableCell>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Descripcion</StyledTableCell>
                        <StyledTableCell>Precio</StyledTableCell>
                        <StyledTableCell>Estrellas</StyledTableCell>
                        <StyledTableCell>Comprar</StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell>
                                <img src={product.pictures && product.pictures[0].url} 
                                width= "128" height= "128" margin= 'auto'
                                display='block' maxWidth='100%' maxHeight='100%'
                                /></TableCell>
                            <TableCell align="center">{product.name}</TableCell>
                            <TableCell align="center">{product.description}</TableCell>
                            <TableCell align="center">{product.price + "$"}</TableCell>
                            <TableCell align="center">{product.stars}<StarRateIcon /></TableCell>
                            <TableCell align="center"><Button
                                variant="contained"
                                color="#FF6633">
                                Agregar al <ShoppingCartIcon />
                                </Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial