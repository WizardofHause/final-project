import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const MemoryDetails = ({ currentUser, deleteMemory }) => {
  const [memoryLikes, setMemoryLikes] = useState(0);
  const [memory, setMemory] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();
  const history = useHistory()

  useEffect(() => {
    fetch(`/memories/${id}`)
      .then((r) => r.json())
      .then((memory) => {
        setMemory(memory);
        // setIsLoaded(true);
        console.log(memory)
      });
  }, [id]);

  if (!memory) return <h1>"Oops! There's nothing here ¯\_(ツ)_/¯"</h1>;


  const { title, category, status, main_img, description, user } = memory;

  const handleDelete = () => {
    fetch(`/memories/${memory.id}`, {
        method: 'DELETE',
    })
    deleteMemory()
    history.push('/');
    // window.location.reload();
}

function likeButton() {
    setMemoryLikes((likes) => likes + 1);
  }

  return (
    <section>
      <div>
        <div>
          <img src={main_img} alt={title} />
          <button className="likes" onClick={likeButton}>
            ❤️{memoryLikes}
          </button>
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>{category} - {status}</p>
          <div>
            <span>{description}</span>
          </div>
        </div>
        {user.id === currentUser.id ? (<button onClick={handleDelete}>DELETE</button>) : null}
      </div>
    </section>
  );
};

export default MemoryDetails;