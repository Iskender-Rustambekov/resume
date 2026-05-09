import { describe, expect, it } from 'vitest';

import { splitArray } from './util';

describe('splitArray', () => {
	it('splits array into balanced chunks', () => {
		expect(splitArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([
			[1, 2, 3],
			[4, 5],
			[6, 7],
		]);
	});

	it('splits equally when divisible', () => {
		expect(splitArray([1, 2, 3, 4], 2)).toEqual([
			[1, 2],
			[3, 4],
		]);
	});

	it('returns single chunk when parts is 1', () => {
		expect(splitArray([1, 2, 3], 1)).toEqual([[1, 2, 3]]);
	});

	it('returns empty array when source array is empty', () => {
		expect(splitArray([], 3)).toEqual([]);
	});

	it('returns empty array when parts is 0', () => {
		expect(splitArray([1, 2, 3], 0)).toEqual([]);
	});

	it('returns empty array when parts is negative', () => {
		expect(splitArray([1, 2, 3], -2)).toEqual([]);
	});

	it('does not create empty chunks when parts exceed array size', () => {
		expect(splitArray([1, 2], 5)).toEqual([[1], [2]]);
	});

	it('preserves original order', () => {
		expect(splitArray(['a', 'b', 'c', 'd', 'e'], 2)).toEqual([
			['a', 'b', 'c'],
			['d', 'e'],
		]);
	});

	it('works with objects', () => {
		const data = [{ id: 1 }, { id: 2 }, { id: 3 }];

		expect(splitArray(data, 2)).toEqual([[{ id: 1 }, { id: 2 }], [{ id: 3 }]]);
	});
});
