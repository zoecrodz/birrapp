import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
      flexGrow: 1,
    },
    children: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
      backgroundColor: "#A41313",
      borderRadius: "20px",
      color: "white",
      fontSize: "120%",
    },
    cuadro: {
      padding: "20px",
      alignItems: "center",
    },
    carrito: {
      padding: theme.spacing(2),
      alignSelf: "flex-start",
    },
    waiting: {
      backgroundColor: "blue",
    },
    completed: {
      backgroundColor: "green",
    },
    rejected: {
      backgroundColor: "red",
    },
  }));



  export default useStyles;