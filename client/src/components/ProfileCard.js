import { format } from 'date-fns'

export default function ProfileCard({ user_profile }) {
    const { first_name, last_name, dob, pob, current_city, family, interests } = user_profile

    const actualDate = (date) => {
        const dateArray = []
        dateArray.push(`${date}T00:00`)
        return dateArray[0]
    }

    const today = new Date()

    const birthday = (format(new Date(actualDate(dob)), 'MMMM d') === format(today, 'MMMM d'))

    // console.log(today)
    // add conditional rendering if certain fields aren't filled out
    return (
        <div class='bg-stone-100 border-4 border-stone-300 rounded-lg p-6 text-stone-600 font-semibold ml-44'>
            { birthday ? <p class='border-2 border-red-300 bg-red-100 py-1 px-2 m-2 text-red-600 font-black uppercase'>HAPPY FUCKIN BIRTHDAY YA ASSHOLE!</p> : null}

            { first_name && !last_name ? <p>Name: <span class='italic font-light'>{first_name}</span></p> : null}
            { !first_name && last_name ? <p>Last Name: <span class='italic font-light'>{last_name}</span></p> : null}
            { first_name && last_name ? <p>Full Name: <span class='italic font-light'>{first_name} {last_name}</span></p> : null}
            { dob ? <p>Born: <span class='italic font-light'>{format(new Date(actualDate(dob)), 'EEEE: MMMM d, yyyy')}</span></p> : null} 
            { pob ? <p>From: <span class='italic font-light'>{pob}</span></p> : null }

            { current_city ? <p>Current City: <span class='italic font-light'>{current_city}</span></p> : null }
            { family ? <p>Occupation: <span class='italic font-light'>{family}</span></p> : null }
            { interests? <p>User Bio: <span class='italic font-light'>{interests}</span></p> : null }
        </div>
    )
}