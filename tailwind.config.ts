import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                navy: '#1A2433',
                teal: '#2A8A8A',
                steel: '#7698AB',
                gold: '#FFB703',
                pageBg: '#F8FAFA',
                panelBg: '#F6F8F9',
                cardBg: '#FAFCFD',
                cardSurf: '#D9E4EA',
                mist: '#E1F0F0',
                ice: '#E1F0FF',
                dark: '#1E1E1E',
                bodyGray: '#787878',
                border: '#C3C3C3',
                whatsapp: '#25D366',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                bengali: ['"Hind Siliguri"', 'sans-serif'],
            },
            borderRadius: {
                card: '12px',
                input: '8px',
            },
        },
    },
    plugins: [],
};

export default config;
