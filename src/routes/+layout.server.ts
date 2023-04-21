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

    const pagesResponse = await fetch(`${url}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pages = await pagesResponse.json()

    const navigation = [
        {
            url: "/story",
            name: "mon histoire"
        },
        {
            url: "/arts",
            name: "mes créations"
        },
        {
            url: "/contact",
            name: "me contacter"
        },
        {
            url: "/show",
            name: "me rencontrer"
        },
    ]

    return {
        nav: navigation,
        home: home.data.attributes
    }
}
