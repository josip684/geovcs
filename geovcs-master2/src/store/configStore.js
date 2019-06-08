import { createStore, combineReducers } from 'redux'

import projectReducer from './reducers/projectReducer'

export default configurateStore = () => {
    return createStore(combineReducers({
        project: projectReducer
    }))
}
