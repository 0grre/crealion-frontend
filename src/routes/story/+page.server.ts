/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const storyResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/story?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const story = await storyResponse.json()

    return {
        story: story.data.attributes,
        url: import.meta.env.VITE_API_URL
    }
}
