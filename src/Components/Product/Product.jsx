import React, { useState } from "react";
import "./Product.css";
import { toast } from "react-toastify";

const Product = ({ product, carts, setCarts }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  // ১. Safe Check: carts array kina check kora ebong Optional Chaining use kora
  const handleSubscription = () => {
    setIsSubscribed(true);

    const isFound = carts.find((item) => item.id === product.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }
    setCarts([...carts, product]);
    toast.success(`Item ${product.id} Added To Card`);
  };

  return (
    <div className="">
      <div className="product-card">
        <div className="product-card-iamge">
          <img
            src={product.icon}
            loading="lazy"
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-card-heading">
          <h3 className="pro-heading">{product.name}</h3>
        </div>

        <div className="product-card-desc">
          <p className="pro-desc">{product.description}</p>
        </div>

        <div className="product-money">
          <div className="pro-money">${product.price}</div>
          <div className="product-time">/{product.period}</div>
        </div>

        <div className="product-feature">
          {/* product.features check kora jeno map error na dey */}
          {product.features?.map((feature, index) => (
            <div key={index} className="main-feature">
              <img
                src="/assets/green-Check.png"
                loading="lazy"
                alt="check"
                className="check"
              />
              <div className="pro-desc">{Object.values(feature)[0]}</div>
            </div>
          ))}
        </div>

        <div className="product-button">
          <button
            onClick={handleSubscription}
            className={"button w-button hover:cursor-pointer"}
          >
            {isSubscribed ? "Purchased" : "Buy Now"}
          </button>
        </div>

        {product.tag && <div className="product-tag">{product.tag}</div>}
      </div>
    </div>
  );
};

export default Product;
