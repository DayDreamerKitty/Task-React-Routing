import React from "react";
import { Redirect, useParams } from "react-router";
import products from "../products";

function Detail() {
  const slug = useParams().detailSlug;
  const product = products.find((product) => product.slug === slug);
  if (!product) return <Redirect to="/" />;

  return (
    <div className="detail">
      <h5>{product.name}</h5>
      <img src={product.image} alt="cookie" />
      <p>{product.price} KD</p>
      <p>{product.description}</p>
    </div>
  );
}

export default Detail;
