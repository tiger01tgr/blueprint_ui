/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'via.placeholder.com',
                port: '',
                pathname: '/*',
            },
            {
                protocol: 'https',
                hostname: 'blueprint-dev-1234.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'blueprint-prod-1234.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            }
        ],
    },
};

module.exports = nextConfig
