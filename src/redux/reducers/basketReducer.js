import { createReducer } from '@reduxjs/toolkit';
import { addFood, removeFood } from '../actions/basketActions'
import { Foods } from '../../store/food/FoodData'

const initialState = { basket: [] };

const basketReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addFood, (state, action) => {
            switch (action.type) {
                case 'basket/addFood':
                    console.log(action.payload)
                    state.basket.push(Foods.filter(e => e.id === action.payload.id)[0])
                    console.log(state.basket)
                    break;
            }
        })
});

export default basketReducer;