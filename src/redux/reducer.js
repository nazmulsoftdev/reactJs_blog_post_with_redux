import {combineReducers} from 'redux';
import { USER_COMMENT_DATA } from '../data/CommentData';
import { InitialContactForm } from './Forms';
import {createForms} from 'react-redux-form';
import * as actionTypes from './actionType';


// this is post reducer 

const UserpostReducer = (postState = {isLoading:false,userPost:[]}, action) => {
    
    switch (action.type) {      

         case actionTypes.POST_LOAD:
         
            return {
                ...postState,
                isLoading: false,
                userPost:action.payload
            }
           
            case actionTypes.POST_LOADIN:
                return {
                   ...postState,
                   isLoading: true,
                   userPost:[]
            }
            default:
                return postState;

    }
 



}

    // case actionTypes.ADD_POST:
        //     let userNewPost = action.payload;
        //     userNewPost.id = postState.length;
        //     return postState.concat(userNewPost)
        //     default:
        //     return postState


// this is comment reducer

const UsercommentReducer = (commentState = USER_COMMENT_DATA, action) => {
    
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            let addNewComment = action.payload;
            addNewComment.id = commentState.length;
            return commentState.concat(addNewComment)
           default:
            return commentState
            
      } 


}





export const Reducer = combineReducers({

    userPost: UserpostReducer,
    userComment: UsercommentReducer,
    
    ...createForms({
        Feedback:InitialContactForm
    })


})




