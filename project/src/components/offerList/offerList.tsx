import { OfferType } from '../../mocks/offers';
import Card from '../card/Card';

type offerListProps = {
  offers: OfferType[];
  onListItemHover: (listItemName: string) => void;
}

function offerList({ offers, onListItemHover }: offerListProps): JSX.Element {


  return (<>
    {offers.map((offer) => <Card key={offer.id} offer={offer} onListItemHover={onListItemHover}/>)}
  </>);
}

export default offerList;
