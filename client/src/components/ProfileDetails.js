import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'
import ProfileCard from './ProfileCard'

export default function ProfileDetails({ userProfile, setUserProfile, currentUser }) {
    return(
        <>
        {userProfile ?
                <>
                    {/* <p>{user_profile.first_name} {user_profile.last_name}</p>
                    <p>Born {user_profile.dob}, in {user_profile.pob}</p>
                    <p>Current City: {user_profile.current_city}</p>
                    <p>Family Members: {user_profile.family}</p>
                    <p>Interests & Hobbies: {user_profile.interests}</p> */}
                    <ProfileCard user_profile={userProfile}/>
                    <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} />
                </>
                : <>
                    <p>Nothing Here! Create a profile, ya dinker doink!</p>
                    <ProfileNew currentUser={currentUser} setUserProfile={setUserProfile} />
                </>}
        </>
    )
}