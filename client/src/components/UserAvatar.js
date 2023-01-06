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
        <span class='flex justify-center'>
            <img src={userAvatar} alt="user_avatar" class='w-32 rounded-full'/>
        </span>
    )
}

export default UserAvatar