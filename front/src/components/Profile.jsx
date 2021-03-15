import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCarritosProfile } from "../store/carritosProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const carritos = useSelector((state) => state.carritosProfile);
  useEffect(() => {
    dispatch(getCarritosProfile(user.id));
  });
  return (
    <div>
      <div>
        {user.firstName} {user.lastName}
      </div>
      <div>{user.email}</div> <br />
      {carritos.length &&
        carritos.map((carrito) => (
          <div>
            Numero de compra: {carrito.id} <br />
            Metodo de pago: {carrito.paymentMethod} <br />
            Numero de mesa: {carrito.table}
            <Link>
              <button>Mas Info</button>
            </Link>{" "}
            <br />
            <br />
          </div>
        ))}
    </div>
  );
};

export default Profile;
