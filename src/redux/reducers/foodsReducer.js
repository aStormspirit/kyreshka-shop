import { createReducer } from '@reduxjs/toolkit';
import { foodFilter, sortFoods } from '../actions/foodsActions';
import { Foods } from '../../store/food/FoodData'

const initialState = { foods: [...Foods], filter: 'all' };

const foodsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(foodFilter, (state, action) => {
            if (action.payload === 'sosiges') {
                state.foods = initialState.foods.filter(food => food.category === 'Сосиски')
                state.filter = 'sosiges'
            } else if (action.payload === 'ham') {
                state.foods = initialState.foods.filter(food => food.category === 'Колбасы и Ветчины')
                state.filter = 'ham'
            } else if (action.payload === 'roll') {
                state.foods = initialState.foods.filter(food => food.category === 'Рулеты из мяса птицы')
                state.filter = 'roll'
            } else if (action.payload === 'pork') {
                state.foods = initialState.foods.filter(food => food.category === 'Деликатесы свиные')
                state.filter = 'pork'
            } else if (action.payload === 'bird') {
                state.foods = initialState.foods.filter(food => food.category === 'Деликатесы из мяса птицы')
                state.filter = 'bird'
            } else if (action.payload === 'all') {
                state.foods = initialState.foods
                state.filter = 'all'
            }
        })
        .addCase(sortFoods, (state, action) => {
            if (action.payload === 'minmax') {
                state.foods = state.foods.push(1)
            }
        })
});

export default foodsReducer;