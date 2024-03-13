import React, { useCallback, useState } from "react";
import "./cart-block.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from '../items-in-cart'
import { useNavigate } from "react-router-dom";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const history = useNavigate()
  const handlerClick = useCallback(() =>{
    setIsCartMenuVisible(false)
    history('/order')
  }, [history])

  return (
    <div className="cart-block">
      <ItemsInCart quantity = {items.length}/>
      <MdOutlineShoppingCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} руб</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handlerClick} />}
    </div>
  );
};
