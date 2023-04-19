/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/7?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const showResponse = await fetch(`${VITE_API_URL}/api/show?populate=*&`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const showResult = await showResponse.json()

    const eventsResponse = await fetch(`${VITE_API_URL}/api/events?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const eventsResult = await eventsResponse.json()

    return {
        show: showResult.data.attributes,
        page: pageResult.data.attributes,
        events: eventsResult.data,
        url: VITE_API_URL
    }
}
