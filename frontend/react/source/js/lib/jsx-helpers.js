/**
 * Returns the given JSX if the condition is true. If not, returns an empty string.
 *
 * @param {boolean} condition Determines what to render.
 * @param {XML|Function} jsx The JSX to render if true.
 * @returns {XML|string}
 */
export function jsxIf(condition, jsx) {
    let genJsx = typeof jsx === 'function' ? jsx : () => jsx;
    return condition ? genJsx() : '';
}