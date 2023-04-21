/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL
    const token = import.meta.env.VITE_API_TOKEN

    const pageResponse = await fetch(`${url}/api/pages/11?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const legalNoticeResponse = await fetch(`${url}/api/legal-notice?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const legalNotice = await legalNoticeResponse.json()

    return {
        legalNotice: legalNotice.data.attributes,
        page: pageResult.data.attributes,
    }
}
