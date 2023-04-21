/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_API_TOKEN;

    const pageResponse = await fetch(`${url}/api/pages/7?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const showResponse = await fetch(`${url}/api/show?populate=*&`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const showResult = await showResponse.json()

    const eventsResponse = await fetch(`${url}/api/events?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const eventsResult = await eventsResponse.json()

    return {
        show: showResult.data.attributes,
        page: pageResult.data.attributes,
        events: eventsResult.data,
        url: url
    }
}
