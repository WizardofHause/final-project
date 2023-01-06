import React, { createContext, useState } from 'react'
import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'
import ProfileCard from './ProfileCard'
import UserAvatarNew from './UserAvatarNew'
import UserAvatar from './UserAvatar'

export const Context = createContext(null);

export default function ProfileDetails({ userProfile, setUserProfile, currentUser }) {
    const [userAvatar, setUserAvatar] = useState(Context)
    const [editMenu, setEditMenu] = useState(false)
    const [createMenu, setCreateMenu] = useState(false)

    const buttonStyle = 'px-2 py-1 m-2 flex-col bg-stone-300 ml-auto rounded-lg text-xs text-stone-500 shadow'

    return (
        <div>
            <Context.Provider value={{ userAvatar, setUserAvatar }}>
                {userProfile
                    ? <div>
                        {userProfile.avatar
                            ? <UserAvatar userProfile={userProfile} setUserProfile={setUserProfile} />
                            : <UserAvatarNew userProfile={userProfile} />}
                        {editMenu
                            ? <div class='mb-4'>
                                <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} setEditMenu={setEditMenu} />
                                <button class='px-2 py-1 ml-44 m-2 flex-col bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setEditMenu(!editMenu)}>CANCEL</button>
                            </div>
                            : <div class='mb-4'>
                                <ProfileCard user_profile={userProfile} />
                                <button class='px-2 py-1 ml-4 m-2 bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setEditMenu(!editMenu)}>EDIT</button>
                            </div>}
                    </div>
                    : <>
                        <p class='pt-2'>Nothing Here! Create a profile to upload a profile picture!</p>
                        {createMenu
                            ? <div>
                                <ProfileNew currentUser={currentUser} setUserProfile={setUserProfile} />
                                <button class={buttonStyle} onClick={() => setCreateMenu(!createMenu)}>CLOSE</button>
                            </div>
                            : <button class={buttonStyle} onClick={() => setCreateMenu(!createMenu)}>CREATE PROFILE</button>}
                    </>}
            </Context.Provider>
        </div>
    )
}