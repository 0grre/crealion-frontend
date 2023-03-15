/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const showResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/show?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const show = await showResponse.json()

    const eventsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/events?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const events = await eventsResponse.json()

    return {
        show: show.data.attributes,
        events: events.data.attributes
    }
}
