import { CommentService } from '../service/comment.service';
import { fetchCommentsRequest, fetchCommentsSuccess, fetchCommentsFailure, addComment, deleteComment } from '../reducer/comment.reducer';

// export const fetchCommentsAction = () => async (dispatch: any) => {
//     dispatch(fetchCommentsRequest());
//     try {
//         const comments = await CommentService.getComments(); // Assurez-vous d'avoir une méthode pour obtenir tous les commentaires
//         dispatch(fetchCommentsSuccess(comments));
//     } catch (error: any) {
//         dispatch(fetchCommentsFailure(error.message));
//     }
// };

export const createCommentAction = (commentData: any) => async (dispatch: any) => {
    dispatch(fetchCommentsRequest());
    try {
        const newComment = await CommentService.createComment(commentData);
        dispatch(addComment(newComment));
    } catch (error: any) {
        dispatch(fetchCommentsFailure(error.message));
    }
};

export const removeCommentAction = (commentId: string) => async (dispatch: any) => {
    dispatch(fetchCommentsRequest());
    try {
        await CommentService.deleteComment(commentId);
        dispatch(deleteComment(commentId));
    } catch (error: any) {
        dispatch(fetchCommentsFailure(error.message));
    }
}; 