import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { useSelector, useDispatch } from "react-redux"
import Container from '@material-ui/core/Container';
import { Table, TableCell, TableContainer, TableRow, TableBody } from '@material-ui/core';
import axios from "axios"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"
import { getCategories } from "../store/categories"






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
}));

export default function SignUp() {
  const classes = useStyles();
  const categories = useSelector(state => state.categories)
  const [newCategory, setNewCategory] = useState({})
  const history = useHistory()
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("enviando producto")
    axios({
      method: `post`,
      url: `http://localhost:8000/api/category`,
      data: newCategory
    })
      .then((cat) => {
        console.log(cat)
        return history.push("/admin/categories")
      })
  }
  const handleInputChange = (event) => {
    setNewCategory({ ...newCategory, [event.target.name]: event.target.value })
    console.log("newProductttttt", newCategory)

  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Category
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="categoryName"
              label="Category Name"
              name="name"
              autoComplete="category"
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
      <Grid>
        <Typography align="center" variant="h4">Tus Categorias Son:</Typography>
      </Grid>
      <TableContainer>
        <Table>
          <TableBody >
            {categories.map((category) => (
              <TableRow >
                <TableCell>
                  <Typography variant="h6" key={category.id} value={category.id}>
                    {category.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Link to={`/admin/categories/edit/${category.id}`}
                    style={{ textDecoration: 'none', color: "inherit" }}>
                    <Button variant="contained"
                      color="primary"
                    >
                      Editar
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}