import { createReducer } from '@reduxjs/toolkit';
import { OfferType } from '../mocks/offers';
import {addOffers, changeCity} from './action';

const emptyOfferList: OfferType[] = [];

const initialState = {
    city: 'Paris',
    offerList: emptyOfferList,
}

export const reducer = createReducer (initialState, (builder)=> {
    builder
    .addCase(changeCity, (state, action)=> {
            state.city = action.payload;
    })
    .addCase(addOffers, (state, action)=> {
        state.offerList = action.payload;
})
})