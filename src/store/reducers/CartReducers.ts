import { CartAction, CartStateType } from '../actions/CartActions/types'

const INITIAL_STATE: CartStateType = {
   cart_data: [],
   loading: false,
}

export default (state: CartStateType = INITIAL_STATE, action: CartAction) => {
   switch (action.type) {
      case 'ADD_TO_CART':
         return { ...state, cart_data: [...state.cart_data, action.payload] }

      case 'REMOVE_FROM_CART':
         return { ...state, cart_data: state.cart_data.filter((cartItme) => cartItme.id != action.payload.id) }

      case 'CLEAR_CART':
         return { ...state, cart_data: [] }
      default:
         return { ...state }
   }
}
