import { useAppDispatch } from "../../hooks/store";
import { addOffers, changeCity } from "../../store/action";
import { offers } from "../../mocks/offers";

function CityList(): JSX.Element {
    const dispatch = useAppDispatch();
    const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

    function handleClick(e: React.MouseEvent<HTMLAnchorElement> , city: string) {
        e.preventDefault;
        dispatch(changeCity(city));
        dispatch(addOffers(offers));
    }

    function renderList() {
        return cities.map ((city)=> (
            <li key={city} className="locations__item">
                <a className="locations__item-link tabs__item" href="#" onClick={(e)=>{handleClick(e, city)}}>
                  <span>{city}</span>
                </a>
              </li>
        ))
    }

    return <>
            <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
                {renderList()}
            </ul>
          </section>
        </div>
        </>
}

export default CityList;