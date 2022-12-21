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

    // if (!memoryComments) return()
    return (
        <div className='comments-container'>
            <h2>Comments</h2>

            {commentCard}

            <CommentNew
                memory={memory}
                onAddComment={onAddComment}
                currentUser={currentUser}
            />
        </div>
    )

}

export default CommentsContainer