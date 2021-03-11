import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/singleProduct"

// - visual de cada item: (imagen del producto, descripcion del producto, precio, reviews, y valoracion)


const SingleProduct = ({productId}) => {
  const dispatch = useDispatch()
  const product = useSelector(state => state.singleProduct)

  useEffect(() => {
    dispatch(getProduct(productId))
      .then(producto => console.log(producto))
  }, [])


  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.pictures && product.pictures[0].url}/>
      <h5>Descripción: {product.description}</h5>
      <h5>Precio: ${product.price}</h5>
      <h5>Stock: {product.stock}</h5>
      <h5>Stars:{product.stars}</h5>
      <h5>Categoría: {product.categoryId}</h5>

    </div>

  )
};
export default SingleProduct;
