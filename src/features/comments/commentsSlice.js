import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

// Define the initial state with comments data
const initialState = {
    commentsArray: COMMENTS
};

// Create a Redux slice for managing comments
const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            // Create a new comment object
            const newComment = {
                id: state.commentsArray.length + 1, // Assign a new ID
                ...action.payload // Spread operator to include all properties from the action's payload
            };
            state.commentsArray.push(newComment); // Add the new comment to the comments array
        }
    }
});

// Export the reducer and actions
export const { addComment } = commentSlice.actions;
export const commentsReducer = commentSlice.reducer;

// Selector function to select comments by campsiteId
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        comment => comment.campsiteId === parseInt(campsiteId)
    );
};