import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'

export default createStore(reducers)
