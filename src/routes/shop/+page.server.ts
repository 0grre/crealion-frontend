/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const shopResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/shop?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const shop = await shopResponse.json()

    const artsResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/arts?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const arts = await artsResponse.json()

    return {
        shop: shop.data.attributes,
        arts: arts.data.attributes
    }
}
