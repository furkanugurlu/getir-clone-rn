import { MainAction, CartStateType } from '../types'

const INITIAL_STATE: CartStateType = {
   cart_data: [],
   loading: false,
}

export default (state: CartStateType = INITIAL_STATE, action: MainAction) => {
   switch (action.type) {
      case 'ADD_TO_CART':
         return { ...state, cart_data: action.payload }

      case 'REMOVE_FROM_CART':
         return { ...state, cart_data: state.cart_data.filter((cartItme) => cartItme != action.payload) }

      case 'CLEAR_CART':
         return { ...state, cart_data: [] }
      default:
         return { ...state }
   }
}
