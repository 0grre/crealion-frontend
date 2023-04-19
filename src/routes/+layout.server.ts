/** @type {import('./$types').PageServerLoad} */
import { VITE_API_URL, VITE_API_TOKEN } from '$env/static/private';
export async function load() {

    const homeResponse = await fetch(`${VITE_API_URL}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
            Accept: 'application/json',
        },
    })

    const home = await homeResponse.json()

    const pagesResponse = await fetch(`${VITE_API_URL}/api/home?populate=*`, {
        headers: {
            Authorization: `Bearer ${VITE_API_TOKEN}`,
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
