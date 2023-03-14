import { OfferType } from '../../mocks/offers';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type CardProps = {
    offer: OfferType;
}

function Card({ offer }: CardProps): JSX.Element {

  const [isActive, setIsActive] = useState(false);

  function handleMouseEnter () {
    setIsActive(true);
  }

  function handleMouseLeave () {
    setIsActive(false);
  }

  return (
    <article className="cities__card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="place-card__mark">
        <span>{offer.rate}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${offer.id}`}>
          <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`}>{offer.name}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
export default Card;
