import { combineReducers } from 'redux'
import mainReducers, { main_state_type } from './MainReducers'

export interface AppState {
   main: main_state_type
}

export default combineReducers<AppState>({
   main: mainReducers,
})
