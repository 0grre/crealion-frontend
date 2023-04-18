/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL
    const homeResponse = await fetch(`${url}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    const pagesResponse = await fetch(`${url}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
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
        // {
        //     url: "/privacy",
        //     name: "mentions légales"
        // },
    ]

    return {nav: navigation}
}
