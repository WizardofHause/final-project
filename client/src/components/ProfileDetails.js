import React, { createContext, useState } from 'react'
import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'
import ProfileCard from './ProfileCard'
import UserAvatarNew from './UserAvatarNew'
import UserAvatar from './UserAvatar'
import Elephant from '../elephant.png'

// ...THIS IS A NIGHTMARE OF TERNARY STATEMENTS AND NEEDS TO BE CLEANED UP...

export const Context = createContext(null);

export default function ProfileDetails({ userProfile, setUserProfile, currentUser }) {
    const [userAvatar, setUserAvatar] = useState(Context)
    const [editMenu, setEditMenu] = useState(false)
    const [createMenu, setCreateMenu] = useState(false)

    return (
        <div>
            <Context.Provider value={{ userAvatar, setUserAvatar }}>
                {userProfile
                    // IF CURRENT USER HAS A PROFILE 
                    ? <div>
                        {userProfile.avatar
                            // IF USER PROFILE HAS AN ASSOCIATED AVATAR SHOW THE AVATAR PHOTO
                            ? <UserAvatar userProfile={userProfile} setUserProfile={setUserProfile} />

                            // IF NO AVATAR PHOTO EXISTS, SHOW DEFAULT PHOTO & PHOTO UPLOAD BUTTONS
                            : <>
                                <span>
                                    <img src={Elephant} alt="user_avatar" class='w-40 rounded-lg select-none float-left' />
                                </span>
                                <UserAvatarNew userProfile={userProfile} />
                            </>
                        }
                        {editMenu
                            // WHEN EDIT BUTTON IS CLICKED, SHOW PROFILE EDIT FORM
                            ? <div class='mb-4'>
                                <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} setEditMenu={setEditMenu} />
                                <button class='px-2 py-1 ml-44 m-2 flex-col bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setEditMenu(!editMenu)}>CANCEL</button>
                            </div>

                            // DEFAULT SETTING: SHOW USER PROFILE DETAILS
                            : <div class='mb-4'>
                                <ProfileCard user_profile={userProfile} />
                                <button class='ml-4 px-2 py-1 m-2 bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setEditMenu(!editMenu)}>EDIT</button>
                            </div>}
                    </div>

                    // IF CURRENT USER DOES NOT HAVE A PROFILE
                    : <div class='mb-6'>
                        <p class='mt-4 px-2 font-semibold text-lg italic bg-red-700 border-4 border-red-900 text-red-100 rounded-lg uppercase'>WE DON'T EVEN KNOW WHO YOU ARE!</p>
                        <p class='my-2 font-semibold'>Create a profile to upload a profile picture!</p>

                        {createMenu
                            // WHEN CREATE PROFILE BUTTON IS CLICKED, SHOW PROFILE NEW FORM
                            ? <div>
                                <ProfileNew currentUser={currentUser} setUserProfile={setUserProfile} />
                                <button class='px-2 py-1 m-2 flex-col bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setCreateMenu(!createMenu)}>CLOSE</button>
                            </div>

                            //
                            : <button class='px-2 py-1 bg-stone-300 rounded-lg text-xs text-stone-500 shadow' onClick={() => setCreateMenu(!createMenu)}>CREATE PROFILE</button>}
                    </div>}
            </Context.Provider>
        </div>
    )
}