import React, { useState } from "react";
import "./Products.css";
import Plane from "../../assets/plane.png";
import { products } from "../../data/all_products";

const Products = () => {
  const [menu, setMenu] = useState(products);

  const filter = (type) => {
    setMenu(products.filter((product) => product.type === type));
  };

  return (
    <div className="productContainer">
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className="products">
        <ul className="menu">
          <li onClick={() => setMenu(products)}>All</li>
          <li onClick={() => filter("popular")}>Popular</li>
          <li onClick={() => filter("latest")}>Latest</li>
          <li onClick={() => filter("bestseller")}>Best Seller</li>
        </ul>
        <div className="list">
          {menu.map((product, i) => (
            <div className="product">
              <div className="left-s">
                <div className="name">
                  <span>{product.name} </span>

                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
