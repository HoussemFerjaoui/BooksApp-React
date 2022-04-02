import actions from '../actions/actionType'
import { handleActions } from 'redux-actions'

 const defaultLogState = {
     logged: false,
 }

export default handleActions({
    [actions.log]: state => ({...!state})
},
defaultLogState
)