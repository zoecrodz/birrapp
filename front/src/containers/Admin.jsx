import React from "react";
import { useSelector } from "react-redux"
import { Route, Switch, Redirect } from "react-router-dom";
import AdminMenu from "../privateComponents/AdminMenu";
import Categories from "../privateComponents/Categories";
import Products from "../privateComponents/ProductsEdit";
import Users from "../privateComponents/Users";
import SingleProductAdmin from "../privateComponents/SingleProductAdmin"
import PorductCreate from "../privateComponents/ProductsCreate"
import HeadingAdmin from "../privateComponents/HeaidngAdmin"
import useStylesHeading from "../Styles/heading";
import FormEditProduct from "../privateComponents/FormEditProduct"




//- visual del admin (-agregar, editar, eliminar- nuevas categorias, productos, usuarios, admin.. ver transacciones totales (carritos de todos los usuarios)

const Admin = () => {
  const classes = useStylesHeading();
  const user = useSelector((state) => state.user)

  return (
    <div>
      {!user.admin && <Redirect from="/admin" to="/" />}
      <HeadingAdmin />
      <div className={classes.drawerHeader} />
      {/*DrawerHeader necesario para que la navbar no pise nada  */}
      <Switch>
        <Route exact path="/admin" render={() => <AdminMenu />} />
        <Route path="/admin/categories" render={() => <Categories />} />
        <Route path="/admin/products/create" render={() => <PorductCreate />} />
        <Route path="/admin/products" render={() => <Products />} />
        <Route path="/admin/product/edit/:id" render={({ match }) => <FormEditProduct productId={match.params.id} />} />
        <Route path="/admin/product/:id" render={({ match }) => <SingleProductAdmin productId={match.params.id} />} />
        <Route path="/admin/users" render={() => <Users />} />
        <Route path="/admin/*" render={() => <div>Pagina no encontrada</div>} />
      </Switch>
    </div>
  );
};
export default Admin;
