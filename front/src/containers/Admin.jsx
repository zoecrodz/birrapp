import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLogin from "../privateComponents/AdminLogin.jsx";
import AdminHeader from "../privateComponents/AdminHeader.jsx";
import AdminMenu from "../privateComponents/AdminMenu";
import Categories from "../privateComponents/Categories";
import Products from "../privateComponents/Products";
import Users from "../privateComponents/Users";

//- visual del admin (-agregar, editar, eliminar- nuevas categorias, productos, usuarios, admin.. ver transacciones totales (carritos de todos los usuarios)

const Admin = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/admin" render={() => <AdminMenu />} />
        <Route path="/admin/login" render={() => <AdminLogin />} />
        <Route path="/admin/categories" render={() => <Categories />} />
        <Route path="/admin/products" render={() => <Products />} />
        <Route path="/admin/users" render={() => <Users />} />
        <Route path="/admin/*" render={() => <div>Pagina no encontrada</div>} />
      </Switch>
    </div>
  );
};
export default Admin;
