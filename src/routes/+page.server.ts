/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const response = await fetch(`https://crealion-backend.fly.dev/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer adc95cae778f28bd611dea0fe08c6ccc075a8ea70c2341ce141d9247593b2ac53234944370245225cfe86ec70eec68ca6c50354466f3e3937fafad49c1a021bfe0a4772e384c215eab6c3181d790b1da997bb4f1ec4bb01336d8e23a3ca55cba41c2d9ab91f75184c4a78ad95b34e72ab163baed69d2261c1cf7993c2ec5c007`,
            Accept: 'application/json',
        },
    })

    const result = await response.json()

    return {home: result.data.attributes}
}
