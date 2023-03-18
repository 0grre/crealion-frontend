/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL;

    const pageResponse = await fetch(`${url}/api/pages/9?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const storyResponse = await fetch(`${url}/api/story?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const storyResult = await storyResponse.json()

    return {
        story: storyResult.data.attributes,
        page: pageResult.data.attributes,
        url: url
    }
}
