import { combineReducers } from 'redux'

import CartReducers from './CartReducers'
import { CartStateType } from '../actions/CartActions/types'

export interface AppState {
   cart: CartStateType
}

export default combineReducers<AppState>({
   cart: CartReducers,
})
