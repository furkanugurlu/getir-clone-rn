import { ThunkDispatch } from 'redux-thunk'

interface ADD_TO_CART {
   type: 'ADD_TO_CART'
   payload: any
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
   cart_data: any[]
}

export type MainAction = ADD_TO_CART | REMOVE_FROM_CART | CLEAR_CART
export type MainDispatch = ThunkDispatch<CartStateType, () => void, MainAction>
