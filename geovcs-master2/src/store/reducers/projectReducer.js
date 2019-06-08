import * as actionTypes from '../actions/actionTypes'

const initState = {
    currentProject: ""
}

export default projectReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PROJECT:
            return {
                ...state,
                currentProject: action.createdProject
            }
        default: 
            return state
    }
}