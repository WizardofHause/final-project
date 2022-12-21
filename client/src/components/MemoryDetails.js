import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CommentsContainer from './CommentsContainer';

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
    history.push('/bank')
  }

  function likeButton() {
    setMemoryLikes((likes) => likes + 1);
  }

  // ------------------------------------ HANDLER FUNCTIONS TO ADD & DELETE COMMENTS -------------------------

  const handleNewComment = (newComment) => {
    setMemoryComments((currentComments) => [...currentComments, newComment])
  }

  const handleDeleteComment = (id) => {
    const newComments = memoryComments.filter((comment) => comment.id !== id);
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
          <CommentsContainer
            memoryComments={memoryComments}
            currentUser={currentUser}
            onDeleteComment={handleDeleteComment}
            memory={memory}
            onAddComment={handleNewComment}
          />
        </div>
        {user.id === currentUser.id ?
          (<>
            <button onClick={handleDeleteMemory}>
              DELETE MEMRY
            </button>
            <Link to={`/memories/${memory.id}/edit`} style={{ textDecoration: 'none' }}>
              <button>EDIT MEMRY</button>
            </Link>
          </>)
          : null}
      </div>
      <Link to='/bank' style={{ textDecoration: 'none' }}><button>BACK</button></Link>
    </section>
  );
};

export default MemoryDetails;