import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["reshaped"],
    experimental: {
        optimizePackageImports: ["reshaped"],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/information/information',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;