import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Register from "../components/Register.jsx";
import Login from "../components/Login.jsx";
import SingleProduct from "../components/SingleProduct.jsx";
import Carrito from "../components/Carrito.jsx";
import Products from "../components/Products.jsx";
import Table from "../components/Products";
import Heading from "../components/Heading";
import useStylesHeading from "../Styles/heading";
import { useSelector } from "react-redux"



// Landing Page: Landing page (Header. Botones de categorias. Menu deslizable horizontal. Carta entera vertical mapeada de productos -con "sumar al pedido"-, y link al componente de cada producto)

//- visual de cada item: (imagen del producto, descripcion del producto, precio, reviews, y valoracion)

//- Carrito: (header con usuario del pedido, lista de items, boton de confirmacion, boton hacer pedido)

//- visual del admin (-agregar, editar, eliminar- nuevas categorias, productos, usuarios, admin.. ver transacciones totales (carritos de todos los usuarios)

const App = () => {
  const classes = useStylesHeading();
  const user = useSelector((state) => state.user)

  return (
    <div>
      {user && user.admin && <Redirect from="/" to="/admin" />}
      <Heading />
      <div className={classes.drawerHeader} />
      {/*DrawerHeader necesario para que la navbar no pise nada  */}
      <Switch>
        <Route exact path="/" render={() => <Table />} />
        <Route exact path="/" render={() => <Products />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/login" render={() => <Login />} />
        <Route
          path="/product/:id"
          render={({ match }) => <SingleProduct productId={match.params.id} />}
        />
        {/* para ver despues */}
        <Route path="/carrito" render={() => <Carrito />}
        />
        <Route path="/*" render={() => <div>Pagina no encontrada</div>} />
      </Switch>
    </div>
  );
};
export default App;
