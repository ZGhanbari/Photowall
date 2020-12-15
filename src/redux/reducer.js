import posts from '../data/posts'
import {combineReducers} from 'redux'

function comments(state={}, action){
    switch(action.type){
        case 'ADD-COMMENT':
            if(!state[action.postId]){
                return {...state,[action.postId]:[action.comment]}
            }else{
                return {...state,[action.postId]:[...state[action.postId],[action.comment]]}
            }
   default: return state
}
}
 function Posts(state=posts , action){

switch(action.type){
    case 'REMOVE-POST': return[...state.slice(0,action.index), ...state.slice(action.index+1)]
    case 'ADD-POST': return [...state,action.post]
    default: return state
}
  
 }

const rootReducer=combineReducers({Posts,comments})

export default rootReducer;