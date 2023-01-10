import { format } from 'date-fns'

export default function ProfileCard({ user_profile }) {
    const { first_name, last_name, dob, pob, current_city, family, interests } = user_profile

    const actualDate = (date) => {
        const dateArray = []
        dateArray.push(`${date}T00:00`)
        return dateArray[0]
    }
    // add conditional rendering if certain fields aren't filled out
    return (
        <div class='bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600 font-semibold ml-44'>
            <p>Full Name: <span class='italic font-light'>{first_name} {last_name}</span></p>
            <p>Born: <span class='italic font-light'>{format(new Date(actualDate(dob)), 'EEEE: MMMM d, yyyy')}</span></p> 
            <p>From: <span class='italic font-light'>{pob}</span></p>
            <p>Current City: <span class='italic font-light'>{current_city}</span></p>
            <p>Occupation: <span class='italic font-light'>{family}</span></p>
            <p>User Bio: <span class='italic font-light'>{interests}</span></p>
        </div>
    )
}