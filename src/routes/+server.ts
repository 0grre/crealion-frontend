import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ cookies }) => {
    const response = await fetch(`https://crealion-backend.fly.dev/api/home`, {
        headers: {
            'content-type': 'application/json',
            Authorization: `Bearer 57cce89bba93c8f117e7d8c05259254dd203556ebdca58799f23709463a81d93784646913bfd05792c4cba8dd3adc109c1ef62ee18caa3cc0b9457ebf2c75decf6ad42229d3725279f7300d6c8b1446a7ae6011e66e3b1988345006609a2c0cf2ddb5050fea207275f7e56c0a6d498ff4a5f998b7f25722c536cd7d54c2853f9`,
            Accept: 'application/json',
        },
    })
    const requestBody = await response.json()
    if (requestBody.success) {
        return new Response(JSON.stringify({ data: requestBody.data }), { status: 200 })
    } else {
        return new Response(JSON.stringify({ message: 'Une erreur est survenue' }), { status: 500 })
    }
}
