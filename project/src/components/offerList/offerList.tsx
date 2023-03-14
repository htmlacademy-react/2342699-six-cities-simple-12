import { OfferType } from '../../mocks/offers';
import Card from '../card/Card';

type offerListProps = {
  offers: OfferType[];
}

function offerList({ offers }: offerListProps): JSX.Element {

  return (<>
    {offers.map((offer) => <Card key={offer.id} offer={offer} />)}
  </>);
}

export default offerList;
