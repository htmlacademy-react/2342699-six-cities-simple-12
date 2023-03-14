export type OfferType = {
    id: string;
    rate: string;
    image: string;
    price: number;
    name: string;
    type: string;
};

export const offers: OfferType[] = [
  {
    id: '1',
    rate: 'Premium',
    image: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
  },
  {
    id: '2',
    rate: 'Premium',
    image: 'img/apartment-02.jpg',
    price: 130,
    name: 'Super apartment on the beach',
    type: 'Apartment',
  },
  {
    id: '3',
    rate: 'Premium',
    image: 'img/apartment-03.jpg',
    price: 90,
    name: 'Cheap apartment, suitable for everyone',
    type: 'Apartment',
  },
  {
    id: '4',
    rate: 'Premium',
    image: 'img/apartment-02.jpg',
    price: 70,
    name: 'This is only with us and with Michael Jackson',
    type: 'Apartment',
  },
];
