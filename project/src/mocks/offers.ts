export type OfferType = {
    id: string;
    rate: string;
    rateNumber: number;
    image: string;
    price: number;

    name: string;
    type: string;
    lat: number;
    lng: number;
};

export const offers: OfferType[] = [
  {
    id: '1',
    rate: 'Premium',
    rateNumber: 4.9,
    image: 'img/apartment-01.jpg',
    price: 120,
    name: 'Beautiful luxurious apartment at great location',
    type: 'Apartment',
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    id: '2',
    rate: 'Premium',
    rateNumber: 4.5,
    image: 'img/apartment-02.jpg',
    price: 130,
    name: 'Super apartment on the beach',
    type: 'Apartment',
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    id: '3',
    rate: 'Premium',
    rateNumber: 4.6,
    image: 'img/apartment-03.jpg',
    price: 90,
    name: 'Cheap apartment, suitable for everyone',
    type: 'Apartment',
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    id: '4',
    rate: 'Premium',
    rateNumber: 4.7,
    image: 'img/apartment-02.jpg',
    price: 70,
    name: 'This is only with us and with Michael Jackson',
    type: 'Apartment',
    lat: 52.3809553943508,
    lng: 4.939309666406198
  },
];