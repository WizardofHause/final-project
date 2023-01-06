import React, { useContext, useEffect } from 'react'
import { Context } from './ProfileDetails'

function UserAvatar({ userProfile }) {
    const { userAvatar, setUserAvatar } = useContext(Context)

    useEffect(() => {
        fetch(`/avatars/${userProfile.avatar.id}`)
            .then((r) => r.json())
            .then((data) => {
                setUserAvatar(data.image_url);
            })
            .catch((error) => console.error(error));
    }, [userProfile]);

    return (
        <span>
            <img src={userAvatar} alt="user_avatar" id='user_avatar' class='w-40 rounded-lg mx-auto mb-2 border-4 border-stone-400 select-none float-left'/>
        </span>
    )
}

export default UserAvatar