/** @type {import('./$types').PageServerLoad} */
export async function load() {
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
