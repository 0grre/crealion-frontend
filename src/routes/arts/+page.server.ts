/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/3?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const shopResponse = await fetch(`${VITE_API_URL}/api/shop?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const shopResult = await shopResponse.json()

    const artsResponse = await fetch(`${VITE_API_URL}/api/arts?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const artsResult = await artsResponse.json()

    return {
        page: pageResult.data.attributes,
        shop: shopResult.data.attributes,
        arts: artsResult.data,
        url: VITE_API_URL
    }
}
