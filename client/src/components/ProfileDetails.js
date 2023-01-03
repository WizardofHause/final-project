// import React, { useState, useEffect } from 'react'
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

    return (
        <>
            <Context.Provider value={{ userAvatar, setUserAvatar }}>
                {userProfile ?
                    <>
                        <div>
                            {userProfile.avatar ? <UserAvatar userProfile={userProfile} setUserProfile={setUserProfile} /> : <UserAvatarNew userProfile={userProfile} />}
                            <ProfileCard user_profile={userProfile} />
                            {/* {userProfile.avatar ? <UserAvatarEdit userProfile={userProfile} /> : null} */}
                            {/* <UserAvatarNew userProfile={userProfile} /> */}
                            {editMenu ?
                                <div>
                                    <button onClick={() => setEditMenu(!editMenu)}>Cancel</button>
                                    <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} />
                                </div> : <button onClick={() => setEditMenu(!editMenu)}>Edit Profile</button>}
                            {/* <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} /> */}
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