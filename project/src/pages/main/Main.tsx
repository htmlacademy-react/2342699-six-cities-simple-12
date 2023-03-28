import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Map from '../../components/map/Map';
import OfferList from '../../components/offerList/offerList';
import { OfferType } from '../../mocks/offers';
import { Point } from '../../types/types';
import { CITY, POINTS } from '../../mocks/points';
import CityList from '../../components/cityList/cityList';
import { useAppSelector } from '../../hooks/store';
import FilterForm from '../../components/filterForm/filterForm';



function Main(): JSX.Element {
  const city = useAppSelector((state)=> state.city);
  const offers = useAppSelector((state)=> state.offerList);
  const [currentOffers, setCurrentOffers] = useState<OfferType[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<Point | undefined>(
    undefined
  );
  
  useEffect(()=> {
    setCurrentOffers(offers);
  }, [offers])

  const onListItemHover = (listItemId: string) => {
    const currentPoint = POINTS.find((point) => point.id === listItemId);
    setSelectedPoint(currentPoint);
  };


  return (
    <div className="page page--gray page--main">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to='/' className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <div className="header__nav-profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </div>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={'/login'}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityList/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              
              <FilterForm setCurrentOffers={setCurrentOffers}/>
              
              <div className="cities__places-list places__list tabs__content">
                <OfferList offers={currentOffers} onListItemHover={onListItemHover}/>
              </div>
            
            </section>

            <div className="cities__right-section">
              <section className="cities__map map">

              <Map city={CITY} points={POINTS} selectedPoint={selectedPoint}/>

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
