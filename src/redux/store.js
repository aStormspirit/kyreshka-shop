import { configureStore } from '@reduxjs/toolkit'
import foodsReducer from './reducers/foodsReducer';

export const store = configureStore({
    reducer: { foods: foodsReducer },
})

