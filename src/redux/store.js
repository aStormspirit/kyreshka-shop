import { configureStore } from '@reduxjs/toolkit'
import foodsReducer from './reducers/foodsReducer';
import basketReducer from './reducers/basketReducer'

export const store = configureStore({
    reducer: {
        foods: foodsReducer,
        basket: basketReducer
    },
})

