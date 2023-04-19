/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/12?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const privacyPolicyResponse = await fetch(`${VITE_API_URL}/api/privacy-policy?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const privacyPolicy = await privacyPolicyResponse.json()

    return {
        privacyPolicy: privacyPolicy.data.attributes,
        page: pageResult.data.attributes,
    }
}
