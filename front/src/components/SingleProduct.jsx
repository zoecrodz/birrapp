import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// - visual de cada item: (imagen del producto, descripcion del producto, precio, reviews, y valoracion)

import { getProduct } from "../store/singleProduct"

const SingleProduct = ({ productId }) => {
    const dispatch = useDispatch()
    const producto = useSelector(state => state.singleProduct)


    useEffect(() => {
      return dispatch(getProduct(productId))
    }, [])


    console.log("producto", producto)

    return (
    <div>SingleProduct</div>
    )
};
export default SingleProduct;
