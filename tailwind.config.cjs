/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'base': '#FFFCF7',
                'green': '#174036',
            },
        },
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: ["lofi"],
    },
}
