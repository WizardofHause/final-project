// import React, { useEffect } from 'react'
import React, { useContext, useEffect } from 'react'
import { Context } from './ProfileDetails'

function UserAvatar({ userProfile }) {
    const { userAvatar, setUserAvatar } = useContext(Context)

    // useEffect(() => {
    //     fetch('/avatars')
    //     .then((r) => r.json())
    //     .then((data) => {
    //         setUserAvatar(data.image_url);
    //     })
    //     .catch((error) => console.error(error));
    // }, [userAvatar]);

    useEffect(() => {
        fetch(`/avatars/${userProfile.avatar.id}`)
        .then((r) => r.json())
        .then((data) => {
            setUserAvatar(data.image_url);
        })
        .catch((error) => console.error(error));
    }, [userProfile]);

  return (
    <div>
        <img src={userAvatar} alt="user_avatar" className="user_avatar" />
    </div>
  )
}

export default UserAvatar