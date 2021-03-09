import React from "react";
import { Link } from "react-router-dom";

//Header. Botones de categorias. Menu deslizable horizontal

const AdminMenu = () => {
  return (
    <div>
      <Link to="/admin/categories">
        <button>Categorias</button>
      </Link>
      <Link to="/admin/products">
        <button>Productos</button>
      </Link>
      <Link to="/admin/users">
        <button>Usuarios</button>
      </Link>
    </div>
  );
};
export default AdminMenu;
