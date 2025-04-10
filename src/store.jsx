import {createStore} from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { createSlice, nanoid } from '@reduxjs/toolkit'

const state = {
    cart : []
}

const CartRedux = (state1 = state,action) => {
    switch(action.type){
        case 'ADD':
            const product = {
                id: nanoid(),
                name: action.name,
                foto: action.foto
            }

            return {cart: [...state1.cart, product] };
        case 'REMOVE':
            return {cart: state1.cart.filter(item=>item.id !== action.payload)}
        case 'CLEAR_ALL':
            return {cart: []};
        default:
        return state1;
    }
}
const store = createStore(CartRedux);

export default store;