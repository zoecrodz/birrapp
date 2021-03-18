import React, { useState } from "react";
import { loginUser, logFbUser, getFbUser } from "../store/user";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../store/user";
import { getCarrito } from "../store/carrito";
import FacebookLogin from "react-facebook-login";
import { makeStyles, Container, CssBaseline, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import loginStyles from "../Styles/login";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [newUser, setNewUser] = useState({});
  const user = useSelector((state) => state.user);
  const classes = loginStyles();

  const responseFacebook = (response) => {
    dispatch(logFbUser(response))
      .then(() => dispatch(getFbUser(localStorage.getItem("id"))))
      .then(() => history.push("/"));
  };

  const componentClicked = () => {
    console.log("logueado desde facebook");
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(newUser))
      .then(() => dispatch(getUser()))
      .then((usuario) => {
        // pregunto por usuario y no por el estado user porque por alguna razon en este paso todavia no existe

        if (usuario.payload) {
          // console.log("usuario", usuario)
          dispatch(getCarrito(usuario.payload.id));
          return history.push("/");
        }
      })
      .catch();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
          <FastfoodIcon />
        </Avatar>
        {/* <img src={process.env.PUBLIC_URL + '/bi.jpg'} alt="logo"  style={{ width: 200, height: 200 }}/> */}
        <Typography component="h1" variant="h5">
          Ingresar
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <br />
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <br />
          <FacebookLogin
            appId="193196372226034"
            autoLoad={false}
            fullWidth
            fields="name,email,picture"
            onClick={componentClicked}
            icon="fa-facebook"
            callback={responseFacebook}
          />
        </form>
      </div>
    </Container>
  );
};
export default Login;
