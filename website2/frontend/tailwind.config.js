/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'lilt-dark': '#0B1120',
                'lilt-cyan': '#22D3EE', // cyan-400
                'lilt-blue': '#2563EB', // blue-600
            },
            fontFamily: {
                mono: ['"Space Mono"', '"JetBrains Mono"', 'monospace'],
                sans: ['"Inter"', '"Geist"', 'sans-serif'],
            },
            backgroundImage: {
                'lilt-gradient': 'linear-gradient(to right, #22D3EE, #2563EB)',
            },
        },
    },
    plugins: [],
}
