import React, { useContext, useState } from 'react'
import { Context } from './ProfileDetails'

function UserAvatarNew({ userProfile }) {
    const { userAvatar, setUserAvatar } = useContext(Context)
    const [avatarMenu, setAvatarMenu] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData();

        data.append("avatar[user_profile_id]", userProfile.id)
        data.append("avatar[image]", e.target.image.files[0]);
        submitToAPI(data)
    }

    function submitToAPI(data) {
        fetch(`/avatars/`, {
            method: "POST",
            body: data,
        })
            .then(r => r.json())
            .then(data => {
                setUserAvatar(data.image_url)
                console.log(data)
                window.location.reload()
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>
            {avatarMenu ? <div>
                <button onClick={() => setAvatarMenu(!avatarMenu)}>Cancel</button>
                <h3>Upload User Avatar</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <label htmlFor="image">Avatar Image</label>
                    <input type="file" name="image" className="user_avatar" />
                    <button type="submit">Submit</button>
                </form>
            </div>
                : <button onClick={() => setAvatarMenu(!avatarMenu)}>Upload User Avatar</button>}
        </div>
    )
}

export default UserAvatarNew