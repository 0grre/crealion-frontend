/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const navigation = [
        {
            url: "about",
            name: "mon histoire"
        },
        {
            url: "shop",
            name: "mes créations"
        },
        {
            url: "contact",
            name: "me contacter"
        },
        {
            url: "show",
            name: "me rencontrer"
        },
    ]

    return {nav: navigation}
}
