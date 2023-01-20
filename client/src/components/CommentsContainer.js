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
        <div class='mt-8'>
            <h2 class='font-black text-lg p-2 px-4 rounded-lg bg-stone-100'>Comments</h2>
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