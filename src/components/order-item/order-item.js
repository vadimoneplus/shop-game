import React from "react";
import {useDispatch}from "react-redux";
import { GameCover } from "../game-cover";
import {TiDeleteOutline }from "react-icons/ti";
import { deleteItemFromCart } from "./../../redux/cart/reducer"
import "./order-item.css";


export const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handlerClick=()=>{
    dispatch(deleteItemFromCart(game.id))
  }

  return (
    <div className="order-item">
      <div className="order-item__cover">
        <GameCover images={game.image} />
      </div>
      <div className="order-item__title">
        <span>{game.title}</span>
      </div>
      <div className="order-item__price">
        <span>{game.price}</span>
        <TiDeleteOutline 
        size={25}
          className="order-item__delete-icon"
          onClick={handlerClick}
        />
      </div>
    </div>
  );
};
