import { useState } from 'react';
import { useAppSelector } from '../../hooks/store';
import { OfferType } from '../../mocks/offers';

type filterProps = {
    setCurrentOffers: React.Dispatch<React.SetStateAction<OfferType[]>>;
}

function FilterForm ({setCurrentOffers}:filterProps): JSX.Element {
    const offers = useAppSelector((state)=> state.offerList);
    const [open, setOpen] = useState(false);
    const [option, setOption] = useState('Popular');
    const filterOptions = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];
    
    const items = [...offers];

    function filterList(option:string) {
        switch(option) {
            case 'Popular':
                setCurrentOffers(offers);
                break;
            case 'Price: low to high':
                setCurrentOffers(items.sort((a, b) => a.price > b.price ? 1 : -1));
                break;
            case 'Price: high to low':
                setCurrentOffers(items.sort((a, b) => a.price < b.price ? 1 : -1));
                break;
            case 'Top rated first':
                setCurrentOffers(items.sort((a, b) => a.rateNumber > b.rateNumber ? 1 : -1));
                break;
        }
    }

    function handleClick() {
        setOpen(!open);
    }

    function renderOptions () {
        return filterOptions.map((option, i)=> (
            <li key={i} className="places__option" tabIndex={0}
                onClick={()=> {
                    setOption(option);
                    setOpen(false);
                    filterList(option);
                }}>
                {option}
            </li>
        ))
    }

    return  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex={0} onClick={handleClick}>
      {option}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"></use>
      </svg>
    </span>
    <ul className="places__options places__options--custom places__options--opened">
      {open && renderOptions()}
    </ul>
  </form>
}

export default FilterForm;