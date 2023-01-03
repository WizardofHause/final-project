import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'

export default function ProfileDetails({ user_profile, currentUser, createProfile }) {
    const { first_name, last_name, dob, pob, current_city, family, interests } = user_profile
    return(
        <>
        {user_profile ?
                <>
                    <p>{first_name} {last_name}</p>
                    <p>Born {dob}, in {pob}</p>
                    <p>Current City: {current_city}</p>
                    <p>Family Members: {family}</p>
                    <p>Interests & Hobbies: {interests}</p>
                    <ProfileEdit currentUser={currentUser} createProfile={createProfile} />
                </>
                : <>
                    <p>Nothing Here! Create a profile, ya dinker doink!</p>
                    <ProfileNew currentUser={currentUser} createProfile={createProfile} />
                </>}
        </>
    )
}