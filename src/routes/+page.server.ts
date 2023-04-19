/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const homeResponse = await fetch(`${VITE_API_URL}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    return {
        home: home.data.attributes
    }
}
