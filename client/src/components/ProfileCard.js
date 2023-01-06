export default function ProfileCard({ user_profile }) {
    const { first_name, last_name, dob, pob, current_city, family, interests } = user_profile

    // add conditional rendering if certain fields aren't filled out
    return (
        <div class='flex-col justify-center items-center bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600 font-semibold'>
            <p>{first_name}</p>
            <p>{last_name}</p>
            <p>Born {dob}, in {pob}</p>
            <p>Current City: {current_city}</p>
            <p>Family Members: {family}</p>
            <p>Interests & Hobbies: {interests}</p>
        </div>
    )
}