import { createAction } from "@reduxjs/toolkit";
import { OfferType } from "../mocks/offers";

//два варианта синтаксиса
export const changeCity = createAction('CHANGE_CITY', (value:string) => {
    return { payload: value }
});

export const addOffers = createAction<OfferType[]>('ADD_OFFERS');