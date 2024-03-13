import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./game-buy.css";
import { Button } from "../button";
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart)
  const isItemCarts = items.some(item=>item.id === game.id)
  const handlerClick = (e) => {
    e.stopPropagation();
    if (isItemCarts){
      dispatch(deleteItemFromCart(game.id))
    } else {
      dispatch(setItemInCart(game))
    }
    
  };
  return (
    <div className="game-buy">
      <span className="game-buy_price">{game.price} руб.</span>
      <Button type={isItemCarts ? "secondary" :"primary"} onClick={handlerClick}>
        {isItemCarts ? 'Убрать из корзины' : 'В корзину'}
      </Button>
    </div>
  );
};
