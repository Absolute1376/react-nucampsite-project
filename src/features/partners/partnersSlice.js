import { createSlice } from '@reduxjs/toolkit';
import { PARTNERS } from '../../app/shared/PARTNERS';

const initialState =  {
        partnersArray: PARTNERS

};



const partnerSlice = createSlice({
    name:'partners',
    initialState

});

export const partnersReducer = partnerSlice.reducer;



export const selectAllPartners = (state) => {
    return state.PARTNERS.partnersArray;
};

export const selectFeaturedPartner = (state) => {
    return state.PARTNERS.partnersArray.find(partner => partner.featured);
};

export default selectAllPartners;