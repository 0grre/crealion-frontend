/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/1?populate[0]=Head&populate[1]=form.fields&populate[2]=form.subjects`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const contactResponse = await fetch(`${VITE_API_URL}/api/contact?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const contactResult = await contactResponse.json()

    return {
        contact: contactResult.data.attributes,
        page: pageResult.data.attributes,
        url: VITE_API_URL
    }
}
