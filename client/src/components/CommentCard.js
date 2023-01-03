function CommentCard({ comment, onDeleteComment, currentUser }) {
    const { body, user } = comment

    // DELETES USER COMMENT
    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
        })
        onDeleteComment(comment.id);
    }

    // <img src={user.avatar.image_url} alt="N/A" width="50"/>

    return (
        <div className='comment-item'>
            <span className='comment-content'>"{body}" - {user.name}</span>
            {(currentUser.id === user.id) ? (<button onClick={handleDelete} className='comment-button'> X </button>) : null}
        </div>
    )
}

export default CommentCard