/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const homeResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    return {
        home: home.data.attributes
    }
}
