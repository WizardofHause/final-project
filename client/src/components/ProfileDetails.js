// import React, { useState, useEffect } from 'react'
import React, { createContext, useState } from 'react'
import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'
import ProfileCard from './ProfileCard'
import UserAvatarForm from './UserAvatarForm'
import UserAvatar from './UserAvatar'

export const Context = createContext(null);

export default function ProfileDetails({ userProfile, setUserProfile, currentUser }) {
    const [userAvatar, setUserAvatar] = useState(Context)

    return (
        <>
            <Context.Provider value={{ userAvatar, setUserAvatar }}>
                {userProfile ?
                    <>
                        <div>
                            {userProfile.avatar ? <UserAvatar userProfile={userProfile} setUserProfile={setUserProfile} /> : null}
                            <ProfileCard user_profile={userProfile} />
                            <UserAvatarForm userProfile={userProfile} />
                            <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} />
                        </div>
                    </>
                    : <>
                        <p>Nothing Here! Create a profile to upload a profile picture!</p>
                        <ProfileNew currentUser={currentUser} setUserProfile={setUserProfile} />
                        {/* <UserAvatarForm setUserAvatar={setUserAvatar} currentUser={currentUser}/> */}
                    </>}
            </Context.Provider>
        </>
    )
}