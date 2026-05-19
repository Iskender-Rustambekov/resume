import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin('./src/shared/lib/i18n/request.ts');

const nextConfig: NextConfig = {
	allowedDevOrigins: ['172.20.10.2'],
	output: 'standalone',
};

export default withNextIntl(nextConfig);
