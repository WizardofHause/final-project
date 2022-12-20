function CommentCard({ comment, onDeleteComment, currentUser }) {
    const { body, user } = comment

    // DELETES USER COMMENT
    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: 'DELETE',
        })
        onDeleteComment(comment.id);
        // window.location.reload();
    }

    return (
        <div>
            <span>"{body}" - {user.name}</span>
            {(currentUser.id === user.id) ? (<button onClick={handleDelete}> X </button>) : null}
        </div>
    )
}

export default CommentCard