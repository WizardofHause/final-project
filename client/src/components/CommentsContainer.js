import CommentCard from './CommentCard'

function CommentsContainer({ comments, onDeleteComment, currentUser }) {


    const commentCard = comments.map(comment => {
        return (
            <li>
                <CommentCard
                    key={comment.id}
                    comment={comment}
                    onDeleteComment={onDeleteComment}
                    currentUser={currentUser}
                />
            </li>
        )
    })

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {commentCard}
            </ul>
        </div>
    )

}

export default CommentsContainer