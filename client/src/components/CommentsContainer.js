import CommentCard from './CommentCard'

function CommentsContainer({ comments, onDeleteComment, currentUser }) {

    const commentCard = comments.map(comment => {
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