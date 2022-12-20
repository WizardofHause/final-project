import CommentCard from './CommentCard'
import CommentNew from './CommentNew';

function CommentsContainer({ memoryComments, onDeleteComment, currentUser, memory, onAddComment }) {

    const commentCard = memoryComments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                comment={comment}
                onDeleteComment={onDeleteComment}
                currentUser={currentUser}
            />
        )
    })

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {commentCard}
            </ul>
            <CommentNew memory={memory} onAddComment={onAddComment} currentUser={currentUser} />
        </div>
    )

}

export default CommentsContainer