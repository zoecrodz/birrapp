import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminMenu from "../privateComponents/AdminMenu";
import Categories from "../privateComponents/Categories";
import Products from "../privateComponents/ProductsEdit";
import Users from "../privateComponents/Users";
import SingleProductAdmin from "../privateComponents/SingleProductAdmin"
import PorductCreate from "../privateComponents/ProductsCreate"



//- visual del admin (-agregar, editar, eliminar- nuevas categorias, productos, usuarios, admin.. ver transacciones totales (carritos de todos los usuarios)

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" render={() => <AdminMenu />} />
        <Route path="/admin/categories" render={() => <Categories />} />
        <Route path="/admin/products/create" render={() => <PorductCreate />} />
        <Route path="/admin/products" render={() => <Products />} />
        <Route path="/admin/product/:id" render={({ match }) => <SingleProductAdmin productId={match.params.id} />}/>
        <Route path="/admin/users" render={() => <Users />} />
        <Route path="/admin/*" render={() => <div>Pagina no encontrada</div>} />
      </Switch>
    </div>
  );
};
export default Admin;
