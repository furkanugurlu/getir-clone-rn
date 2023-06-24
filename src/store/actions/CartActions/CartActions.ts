import { CartDispatch } from './types'

export const addToCart = (payload: any) => {
   return (dispatch: CartDispatch) => {
      dispatch({ type: 'ADD_TO_CART', payload: payload })
   }
}

export const removeFromCart = (payload: any) => {
   return (dispatch: CartDispatch) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload })
   }
}

export const clearCart = () => {
   return (dispatch: CartDispatch) => {
      dispatch({ type: 'CLEAR_CART' })
   }
}
