import * as actionTypes from './actionTypes'

export const createProject = (projectName) => {
    return {
        type: actionTypes.CREATE_PROJECT,
        createdProject: projectName
    }
}

export const getAllProjects = () => {
    
}