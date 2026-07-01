import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/shared/lib/i18n/request.ts');

const nextConfig: NextConfig = {
	allowedDevOrigins: ['192.168.1.10'],
	output: 'standalone',
};

export default withNextIntl(nextConfig);
