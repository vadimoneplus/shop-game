import React from "react";
import { useSelector } from "react-redux";
import { GameCover } from "../../components/game-cover";
import { GameGenre } from "../../components/game-genre";
import { GameBuy } from "../../components/game-buy";
import './game-page.css'

export const GamePage = () => {
  const game = useSelector((state) => state.game.currentGame);
  console.log(game);
  if (!game) return null;

  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="Youtube Video Player"
            frameBorder='0'
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover images={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки этого продукта</p>
          <div className="game-item__genre">
            {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
          </div>
          
          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};
