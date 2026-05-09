/**
 * Splits an array into balanced chunks with nearly equal sizes.
 */
export const splitArray = <T>(array: T[], parts: number): T[][] => {
	if (parts <= 0) {
		return [];
	}

	if (!array.length) {
		return [];
	}

	const result: T[][] = [];

	const minSize = Math.floor(array.length / parts);
	const remainder = array.length % parts;

	let start = 0;

	for (let index = 0; index < parts; index++) {
		const extra = index < remainder ? 1 : 0;
		const end = start + minSize + extra;

		const chunk = array.slice(start, end);

		if (chunk.length) {
			result.push(chunk);
		}

		start = end;
	}

	return result;
};
