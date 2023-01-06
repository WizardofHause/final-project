export default function ProfileCard({ user_profile }) {
    const { first_name, last_name, dob, pob, current_city, family, interests } = user_profile

    // add conditional rendering if certain fields aren't filled out
    return (
        <div class='bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600 font-semibold ml-44'>
            <p>Full Name {first_name} {last_name}</p>
            <p>Born {dob}</p> 
            <p>From {pob}</p>
            <p>Current City: {current_city}</p>
            <p>Occupation: {family}</p>
            <p>User Bio: {interests}</p>
        </div>
    )
}