import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"; 
import CommentsContainer from './CommentsContainer';
import CommentNew from './CommentNew';

const MemoryDetails = ({ currentUser, deleteMemory }) => {
  const [memory, setMemory] = useState(null);
  const [memoryComments, setMemoryComments] = useState([])
  const [memoryLikes, setMemoryLikes] = useState(0);

  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    fetch(`/memories/${id}`)
      .then((r) => r.json())
      .then((memory) => {
        setMemory(memory);
        setMemoryLikes(memory.likes)
        setMemoryComments(memory.comments)
      });
  }, [id]);

  if (!memory) return <h1>"Oops! There's nothing here ¯\_(ツ)_/¯"</h1>;

  const { title, category, status, main_img, description, user } = memory;

  const handleDeleteMemory = () => {
    fetch(`/memories/${id}`, {
      method: 'DELETE',
    })
    deleteMemory(memory);
    history.push('/')
  }

  function likeButton() {
    setMemoryLikes((likes) => likes + 1);
  }

  const handleNewComment = (newComment) => {
    setMemoryComments((memoryComments) => [...memoryComments, newComment])
  }

  const handleDeleteComment = (id) => {
    const newComments = memory.comments.filter((comment) => comment.id !== id);
    setMemoryComments(newComments)
  }

  return (
    <section>
      <div>
        <div>
          <img src={main_img} alt={title} width='400' />
          <button onClick={likeButton}>
            ❤️ {memoryLikes}
          </button>
        </div>
        <div>
          <h2>{title}</h2>
          <p>{category} - {status}</p>
          <div>
            <span>Description: {description}</span>
          </div>
          <CommentsContainer comments={memoryComments} currentUser={currentUser} onDeleteComment={handleDeleteComment}/>
          <CommentNew memory={memory} onAddComment={handleNewComment} currentUser={currentUser}/>
        </div>
        {user.id === currentUser.id ? (<button onClick={handleDeleteMemory}>DELETE</button>) : null}
      </div>
    </section>
  );
};

export default MemoryDetails;