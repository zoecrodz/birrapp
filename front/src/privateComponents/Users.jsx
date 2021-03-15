import React from 'react';
import { Table, TableBody, TableCell, TableContainer, Box, TableRow, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getUsers } from "../store/users"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




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
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)


  useEffect(() => {
    dispatch(getUsers())
  }, [])


  return (
    <TableContainer>
      <Table>
        <TableBody >
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell align="center">
                <Typography variant="h6" align="left">{user.firstName}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography varinat="h6" align="left">{user.lastName}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography variant="h6">{user.email}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}