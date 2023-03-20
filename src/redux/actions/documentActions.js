import * as documentActions from '../actions/actions'
const uuidv4 = require('uuid')    
export const setSkin =(skindCd) =>{
    return {
        type: documentActions.SET_SKIN,
        payload: {
            id:uuidv4.v4(),
            skinCd:skindCd
        }
    }

}
export const updateSkin =(skindCd) =>{
    return {
        type: documentActions.UPDATE_SKIN,
        payload: {
            skinCd:skindCd
        }
    }

}