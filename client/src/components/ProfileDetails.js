import ProfileEdit from './ProfileEdit'
import ProfileNew from './ProfileNew'
import ProfileCard from './ProfileCard'

export default function ProfileDetails({ userProfile, setUserProfile, currentUser }) {
    return(
        <>
        {userProfile ?
                <>
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