import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import CommentsContainer from './CommentsContainer';
import { format } from 'date-fns'

const MemoryDetails = ({ currentUser, deleteMemory }) => {
  const [memory, setMemory] = useState(null);
  const [memoryComments, setMemoryComments] = useState([])
  const [memoryLikes, setMemoryLikes] = useState(0);
  const [showComments, setShowComments] = useState(false)

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

  const { title, category, status, main_img, description, user, date } = memory;

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

  // ------------------------------------- CONDITIONALS FOR STYLING

  const styleCategory = (category) => {
    let c;
    switch (category) {
      case 'vacation':
        c = 'shadow border-4 border-teal-500 bg-teal-700 text-teal-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
        break;
      case 'romance':
        c = 'shadow border-4 border-red-700 bg-red-900 text-red-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
        break;
      case 'event':
        c = 'shadow border-4 border-sky-600 bg-sky-800 text-sky-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
        break;
      case 'holiday':
        c = 'shadow border-4 border-amber-400 bg-amber-600 text-amber-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
        break;
      case 'celebration':
        c = 'shadow border-4 border-indigo-500 bg-indigo-900 text-indigo-50 capitalize text-center font-semibold px-2 py-1 rounded-xl';
        break;
      default:
        c = null;
    }
    return c
  }

  const styleStatus = (status) => {
    let s;
    switch (status) {
      case 'past':
        s = 'bg-stone-600 text-amber-50 text-xs uppercase px-2 py-1 rounded-full mr-auto font-semibold';
        break;
      case 'present':
        s = 'bg-stone-600 text-teal-50 text-xs uppercase px-2 py-1 rounded-xl ml-auto font-semibold';
        break;
      case 'future':
        s = 'bg-stone-600 text-indigo-50 text-xs uppercase px-2 py-1 rounded-xl ml-auto font-semibold';
        break;
      default:
        s = null;
    }
    return s
  }

  const commentShow = () => {
    setShowComments(!showComments)
  }

  // HANDLER TO PREVENT TIMEZONE CONFLICTS
  const actualDate = (date) => {
    const dateArray = []
    dateArray.push(`${date}T00:00`)
    return dateArray[0]
  }

  return (
    <section>
      <div class='flex flex-col items-center'>
        <span class='bg-stone-200 rounded-2xl my-2 px-4'>
          <h2 class='my-4 font-black text-stone-900 bg-stone-100 text-4xl p-2 text-center rounded-lg px-auto'>{title}</h2>
        </span>
        <span class='text-base italic font-semibold capitalize mb-2'>by {user.name}</span>
        <div className='memory-image-container'>
          <div class='flex flex-row items-center'>
            <img src={main_img} alt={title} width='600' class='rounded-2xl' />
            <div className='memory-category-tag'>
              <span class={styleCategory(category)}>{category}</span>
            </div>
            <div className='memory-likes-button'>
              <button onClick={likeButton} class={styleCategory(category)}>
                ❤️ {memoryLikes}
              </button>
            </div>
            <div className='memory-status-overlay'>
              <span class={styleStatus(status)}>{status}</span>
            </div>
          </div>
        </div>
        <div class='px-6 pb-6 m-4 bg-stone-200 rounded-lg'>
          <p class='bg-stone-100 p-2 px-4 mt-5 rounded-lg text-lg font-black'>{format(new Date(actualDate(date)), 'EEEE, MMMM d, yyyy')}</p>
          <p class='bg-stone-50 p-2 my-5 rounded-lg font-base mx-4'>{description}</p>
          {showComments ?
            <>
              <button class='flex-col text-center justify-center items-center bg-stone-300 ml-auto rounded-full w-4 h-4 text-xs text-stone-400 shadow' onClick={commentShow}>-</button>
              <CommentsContainer
                memoryComments={memoryComments}
                currentUser={currentUser}
                onDeleteComment={handleDeleteComment}
                memory={memory}
                onAddComment={handleNewComment}
              />
            </>
            :
            <button class='flex-col text-center justify-center items-center bg-stone-300 ml-auto rounded-full w-4 h-4 text-xs text-stone-400 shadow' onClick={commentShow}>+</button>
          }
        </div>
        {user.id === currentUser.id ?
          (<div class='p-2'>
            <Link to={`/memories/${memory.id}/edit`} style={{ textDecoration: 'none' }}>
              <span class='p-2'>
                <button class={styleCategory(category)}>EDIT</button>
              </span>
            </Link>
            <span class='p-2 m-2'>
              <Link to='/bank' style={{ textDecoration: 'none' }}><button class={styleCategory(category)}>HOME</button></Link>
            </span>
            <span class='p-2'>
              <button class={styleCategory(category)} onClick={handleDeleteMemory}>
                DELETE
              </button>
            </span>
          </div>)
          : <Link to='/bank' style={{ textDecoration: 'none' }}><button class={styleCategory(category)}>HOME</button></Link>
        }
      </div>
    </section>
  );
};

export default MemoryDetails;