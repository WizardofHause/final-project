export default function ProfileCard({ user_profile }) {
    return (
        <>
            <p>{user_profile.first_name} {user_profile.last_name}</p>
            <p>Born {user_profile.dob}, in {user_profile.pob}</p>
            <p>Current City: {user_profile.current_city}</p>
            <p>Family Members: {user_profile.family}</p>
            <p>Interests & Hobbies: {user_profile.interests}</p>
        </>
    )
}