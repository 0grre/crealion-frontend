/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const result = await response.json()

    return {
        contact: result.data.attributes,
        url: import.meta.env.VITE_API_URL
    }
}
