/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL;
    const token = import.meta.env.VITE_API_TOKEN;

    const pageResponse = await fetch(`${url}/api/pages/5?populate[0]=Head`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const homeResponse = await fetch(`${url}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    return {
        home: home.data.attributes,
        page: pageResult.data.attributes,
    }
}
