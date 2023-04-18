/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const url = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_API_TOKEN;

    const pageResponse = await fetch(`${url}/api/pages/3?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const artResponse = await fetch(`${url}/api/arts/${params.id}?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const artResult = await artResponse.json()

    return {
        page: pageResult.data.attributes,
        art: artResult.data.attributes,
        url: url,
    }
}
