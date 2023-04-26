/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL
    const token = import.meta.env.VITE_API_TOKEN

    const homeResponse = await fetch(`${url}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    const pagesResponse = await fetch(`${url}/api/pages?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pages = await pagesResponse.json()

    const nav = pages.data.sort((a, b) => a.attributes.Head.order - b.attributes.Head.order);

    return {
        nav: nav,
        home: home.data.attributes
    }
}
