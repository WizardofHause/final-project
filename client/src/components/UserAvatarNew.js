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

    const buttonStyle = 'px-2 py-1 m-2 flex-col text-center justify-center items-center bg-stone-300 ml-auto rounded-lg text-xs text-stone-500 shadow'

    return (
        <div>
            {avatarMenu ?
                <div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="image" class='px-2 py-1 m-2 flex-col text-center justify-center items-center bg-stone-300 ml-4 rounded-lg text-xs text-stone-500 shadow font-black uppercase hover:bg-orange-300 hover:text-orange-50'>CHOOSE Image</label>
                        <input type="file" name="image" class='hidden' id='image'/>
                        <button class={buttonStyle} type="submit">SUBMIT</button>
                        <button class={buttonStyle} onClick={() => setAvatarMenu(!avatarMenu)}>CANCEL</button>
                    </form>
                </div>
                : <button class='px-2 py-1 m-2 ml-4 bg-stone-300 ml-auto rounded-lg text-xs text-stone-500 shadow' onClick={() => setAvatarMenu(!avatarMenu)}>UPLOAD PROFILE PIC</button>}
        </div>
    )
}

export default UserAvatarNew