/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL;

    const pageResponse = await fetch(`${url}/api/pages/3?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const shopResponse = await fetch(`${url}/api/shop?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const shopResult = await shopResponse.json()

    const artsResponse = await fetch(`${url}/api/arts?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const artsResult = await artsResponse.json()

    return {
        page: pageResult.data.attributes,
        shop: shopResult.data.attributes,
        arts: artsResult.data,
        url: url
    }
}
