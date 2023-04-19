/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const pageResponse = await fetch(`${VITE_API_URL}/api/pages/11?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const legalNoticeResponse = await fetch(`${VITE_API_URL}/api/legal-notice?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const legalNotice = await legalNoticeResponse.json()

    return {
        legalNotice: legalNotice.data.attributes,
        page: pageResult.data.attributes,
    }
}
