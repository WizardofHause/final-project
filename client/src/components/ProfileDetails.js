import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'

export default function ProfileDetails({ user_profile, currentUser, createProfile }) {
    return(
        <>
        {user_profile ?
                <>
                    <p>{user_profile.first_name} {user_profile.last_name}</p>
                    <p>Born {user_profile.dob}, in {user_profile.pob}</p>
                    <p>Current City: {user_profile.current_city}</p>
                    <p>Family Members: {user_profile.family}</p>
                    <p>Interests & Hobbies: {user_profile.interests}</p>
                    <ProfileEdit currentUser={currentUser} createProfile={createProfile} />
                </>
                : <>
                    <p>Nothing Here! Create a profile, ya dinker doink!</p>
                    <ProfileNew currentUser={currentUser} createProfile={createProfile} />
                </>}
        </>
    )
}