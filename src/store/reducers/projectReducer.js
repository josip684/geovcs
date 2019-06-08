import * as actionTypes from '../actions/actionTypes'

const initState = {
    currentProject: "",
    projectsList: []
}

export default projectReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.CREATE_PROJECT:
            return {
                ...state,
                currentProject: action.createdProject,
                projectsList: state.projectsList.concat(action.createdProject)
            }
        default: 
            return state
    }
}