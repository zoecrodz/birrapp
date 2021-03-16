import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { writeReview } from "../store/review";
import { getUser } from "../store/user";
import StarRateIcon from '@material-ui/icons/StarRate';

const Reviews = ({ productId }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [review, setReview] = useState({});
  const handleChange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser()).then((foundUser) => {
      const user = foundUser.payload;
      const data = { review, productId, user};
      dispatch(writeReview(data)).then(() => history.push("/")); //despues lo cambio al historial de carritos
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label name="stars"for="stars">Evalúa el producto</label>
          <br/>
          {/*for para estrellas*/}
          <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
          <br/>
        

          <select name="stars" value={review.stars}  size="1" onChange={handleChange}>
            <option value="1">1 estrella </option>
            <option value="2">2 estrellas</option>
            <option value="3">3 estrellas</option>
            <option value="4">4 estrellas</option>
            <option value="5">5 estrellas</option>
          </select>
          <br />
          <br />
          <span>Titulo</span>
          <br />
          <input
            name="title"
            type="text"
            required
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div>
          <span>Descripción</span>
          <br />
          <input
            name="description"
            type="text"
            required
            placeholder=""
            onChange={handleChange}
          />
        </div>
        <div>
          <br />
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
