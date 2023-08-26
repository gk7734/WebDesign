/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}

module.exports = nextConfig
