/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL
    const token = import.meta.env.VITE_API_TOKEN

    const pageResponse = await fetch(`${url}/api/pages/1?populate[0]=Head&populate[1]=form.fields&populate[2]=form.subjects`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const privacyPolicyResponse = await fetch(`${url}/api/privacy-policy?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const privacyPolicy = await privacyPolicyResponse.json()

    return {
        privacyPolicy: privacyPolicy.data.attributes,
        page: pageResult.data.attributes,
    }
}
