import { describe, expect, it } from 'vitest';

import { resolveRequestLocale } from './locale';

describe('resolveRequestLocale', () => {
	it('uses the first supported primary language subtag', () => {
		expect(resolveRequestLocale('fr-CA,ru;q=0.9,en;q=0.8')).toBe('ru');
	});

	it('falls back to the default locale when no supported language exists', () => {
		expect(resolveRequestLocale('de-DE,fr;q=0.9')).toBe('en');
	});
});
