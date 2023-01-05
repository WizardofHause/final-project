function CommentCard({ comment, onDeleteComment, currentUser }) {
    const { body, user } = comment

    // DELETES USER COMMENT
    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
        })
        onDeleteComment(comment.id);
    }

    return (
        <div className='comment-item'>
            <span className='comment-content'><span class="italic">"{body}"</span> - {user.name}</span>
            {/* {(currentUser.id === user.id) ? (<button onClick={handleDelete} className='comment-button'> X </button>) : null} */}
            {(currentUser.id === user.id) ? (<button onClick={handleDelete} class='flex-col text-center justify-center items-center bg-stone-200 ml-auto rounded-full w-4 h-4 text-xs text-stone-400 shadow'>x</button>) : null}
        </div>
    )
}

export default CommentCard