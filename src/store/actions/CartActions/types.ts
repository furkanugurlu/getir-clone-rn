import { ThunkDispatch } from 'redux-thunk'
import { Product } from '../../../types'

interface ADD_TO_CART {
   type: 'ADD_TO_CART'
   payload: number
}
interface REMOVE_FROM_CART {
   type: 'REMOVE_FROM_CART'
   payload: any
}
interface CLEAR_CART {
   type: 'CLEAR_CART'
}

export interface CartStateType {
   loading: boolean
   cart_data: Product[]
}

export type CartAction = ADD_TO_CART | REMOVE_FROM_CART | CLEAR_CART
export type CartDispatch = ThunkDispatch<CartStateType, () => void, CartAction>
