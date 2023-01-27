/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#ff5850',
                    dark: '#250d1a',
                },
                secondary: {
                    DEFAULT: '#2bffff',
                    dark: '#339197',
                },
            },
        },
    },
    plugins: [],
};
