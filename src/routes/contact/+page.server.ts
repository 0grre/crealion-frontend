/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const url = import.meta.env.VITE_API_URL
    const token = import.meta.env.VITE_API_TOKEN

    const pageResponse = await fetch(`${url}/api/pages/1?populate[0]=Head&populate[1]=form.fields&populate[2]=form.subjects`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const pageResult = await pageResponse.json()

    const contactResponse = await fetch(`${url}/api/contact?populate=*`, {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    })

    const contactResult = await contactResponse.json()

    return {
        contact: contactResult.data.attributes,
        page: pageResult.data.attributes,
        url: url
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    mail: async ({ request }) => {
        const url = import.meta.env.VITE_API_URL
        const token = import.meta.env.VITE_API_TOKEN

        const body = await request.formData();

        console.log(body)

        const contactResponse = await fetch(`${url}/api/contact/mail`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/x-www-form-urlencoded',
            },
            method: 'POST',
            body: body
        })

        console.log(contactResponse)

        return { success: true };
    }
};
