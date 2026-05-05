import { describe, expect, it } from 'vitest';

import { cn } from './util';

describe('cn', () => {
	it('returns single class', () => {
		expect(cn('text-center')).toBe('text-center');
	});

	it('merges Tailwind classes correctly (twMerge)', () => {
		expect(cn('px-2', 'px-4')).toBe('px-4');
		expect(cn('text-sm', 'text-lg')).toBe('text-lg');
	});

	it('handles multiple arguments', () => {
		expect(cn('px-2', 'py-1', 'px-4')).toBe('py-1 px-4');
	});

	it('handles arrays', () => {
		expect(cn(['block', 'mt-2'])).toBe('block mt-2');
	});

	it('handles objects (clsx behavior)', () => {
		expect(cn({ hidden: false, block: true })).toBe('block');
	});

	it('handles mixed inputs', () => {
		expect(
			cn(['block', 'mt-2'], { hidden: false, 'text-sm': true }, 'px-2', 'px-4'),
		).toBe('block mt-2 text-sm px-4');
	});

	it('ignores falsy values', () => {
		expect(cn(null, undefined, false, '', 'text-center')).toBe('text-center');
	});

	it('returns empty string if no valid classes', () => {
		expect(cn(null, false, undefined)).toBe('');
	});

	it('does not duplicate identical classes', () => {
		expect(cn('text-center', 'text-center')).toBe('text-center');
	});
});
