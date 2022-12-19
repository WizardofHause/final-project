import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const MemoryDetails = () => {
  const [memoryLikes, setMemoryLikes] = useState(likes);
  const [memory, setMemory] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);

  const { memoryId } = useParams();
  const history = useHistory()

  useEffect(() => {
    fetch(`/memories/${memoryId}`)
      .then((r) => r.json())
      .then((memory) => {
        setMemory(memory);
        // setIsLoaded(true);
      });
  }, [memoryId]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { title, category, status, main_img, description, likes, comments } = memory;

  function likeButton() {
    setMemoryLikes((likes) => likes + 1);
  }

  const handleDelete = () => {
    fetch(`/memories/${id}`, {
        method: 'DELETE',
    })
    deleteMemory()
    history.push('/');
    // window.location.reload();
}

  return (
    <section>
      <div>
        <div>
          <img src={main_img} alt={title} />
          <button className="likes" onClick={likeButton}>
            ❤️{likes}
          </button>
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>{category} - {status}</p>
          <div>
            <span>{description}</span>
          </div>
        </div>
        {place.user_id === currentUser.id ? (<button onClick={handleDelete}></button>) : null}
      </div>
    </section>
  );
};

export default MemoryDetails;