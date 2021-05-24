import * as actionTypes from './actionType';
import { USER_POST_DATA } from '../data/PostData';



export const addComment = (author, comment) => ({
    type: actionTypes.ADD_COMMENT,
    payload: {
        author: author,
        comment: comment
    }
});





// Post load 

export const PostLoad = userPost => ({
    
    type: actionTypes.POST_LOAD,
    payload: userPost

});



// Post Loading

export const PostLoading = () => ({
    
    type: actionTypes.POST_LOADIN

});



// custom dispatch 

export const fetchDispatch = () => dispatch => {
    
    dispatch(PostLoading());

    setTimeout(() => {
        dispatch(PostLoad(USER_POST_DATA))
    }, 2000);

}
