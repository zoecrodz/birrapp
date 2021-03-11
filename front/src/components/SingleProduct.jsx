import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// - visual de cada item: (imagen del producto, descripcion del producto, precio, reviews, y valoracion)

import { getProduct } from "../store/singleProduct"
import { getPictures } from "../store/pictures"

const SingleProduct = ({ productId }) => {
    const dispatch = useDispatch()
    const producto = useSelector(state => state.singleProduct)
    const [fotos, setFotos] = useState([])

    useEffect(() => {
      return axios.get(`http://localhost:8000/api/pictures/${productId}`)
        .then((fotos) => setFotos(fotos.data))
        .then(() => dispatch(getProduct(productId)))  
    }, [])
    

    return (
    <div>
      {/* HEADER */}
      <h1>{producto.name}</h1>
      { fotos.length > 0 ? fotos.map(foto => {
        return <img src={foto.url} alt=""/>
      }) : null
      }
      <h5>Descripción: {producto.description}</h5>
      <h5>Precio: ${producto.price}</h5>
      <h5>Stock: {producto.stock}</h5>
      <h5>Stars:{producto.stars}</h5>
      <h5>Categoría: {producto.categoryId}</h5>

    </div>

    )
};
export default SingleProduct;
