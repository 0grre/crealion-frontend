/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load({ params }) {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/3?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const artResponse = await fetch(`${VITE_API_URL}/api/arts/${params.id}?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const artResult = await artResponse.json()

    return {
        page: pageResult.data.attributes,
        art: artResult.data.attributes,
        url: VITE_API_URL,
    }
}
