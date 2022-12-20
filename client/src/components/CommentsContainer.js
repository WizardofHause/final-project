import CommentCard from './CommentCard'

function CommentsContainer({ memoryComments, onDeleteComment, currentUser }) {

    const commentCard = memoryComments.map(comment => {
        return (
            <CommentCard
                key={comment.id}
                commentId={comment.id}
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
                <li>
                    {commentCard}
                </li>
            </ul>
        </div>
    )

}

export default CommentsContainer