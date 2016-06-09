/**
 * Generates an array of the given size, with the given value in each index.
 *
 * @param {number} size The length of the array.
 * @param {Function|*} value Either a map function that should return the value for the given index, or a static value for every index.
 * @returns {Array}
 */
export function generate(size, value) {
    let map = typeof value === 'function' ? value : () => value;

    return Array.apply(null, { length: size }).map(map);
}