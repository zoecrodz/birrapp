import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import MenuItem from '@material-ui/core/MenuItem';
import { getCategories } from "../store/categories"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useHistory } from "react-router-dom";
import { getCarrito } from "../store/carrito"


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const dispatch = useDispatch()
    // const categories = useSelector(state => state.categories)
    const carrito = useSelector(state => state.carrito)
    const [newProduct, setNewProduct] = useState({})
    const history = useHistory()


    // useEffect(() => {
    //     dispatch(getCategories())
    // }, [])

    useEffect(() => {
        dispatch(getCarrito())
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando producto")
        axios({
            method: `post`,
            url: `http://localhost:8000/api/product`,
            data: newProduct
        })
            .then((product) => {
                console.log(product)
                return history.push("/admin/products")
            })
    }

    const handleInputChange = (event) => {
        setNewProduct({ ...newProduct, [event.target.name]: event.target.value })
        console.log("newProductttttt", newProduct)

    }



    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <FastfoodIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Pay your products!!!
        </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                defaultValue=""
                                id="outlined-select-currency"
                                select
                                required
                                fullWidth
                                label="Category"
                                variant="outlined"
                                name="categoryId"
                                onChange={handleInputChange}
                            >
                                {carrito.map((cart) => (
                                    <MenuItem key={cart.id} value={cart.id}>
                                        {cart.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            name="name"
                            variant="outlined"
                            required
                            fullWidth
                            id="productName"
                            label="Product Name"
                            autoFocus
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="url"
                            label="URL"
                            name="url"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="precio"
                            label="Price $"
                            name="price"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="stock"
                            label="stock"
                            name="stock"
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Create
          </Button>
                </form>
            </div>
        </Container>
    );
}