/**
 * Text case conversion functions for VS Code extension
 */

/**
 * Converts text to uppercase
 * @param {string} text - The text to convert
 * @returns {string} - The uppercase text
 */
function toUpper(text) {
    return text.toUpperCase();
}

/**
 * Converts text to lowercase
 * @param {string} text - The text to convert
 * @returns {string} - The lowercase text
 */
function toLower(text) {
    return text.toLowerCase();
}

/**
 * Converts text to title case
 * @param {string} text - The text to convert
 * @returns {string} - The title case text
 */
function toTitle(text) {
    return text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Converts text to camelCase
 * @param {string} text - The text to convert
 * @returns {string} - The camelCase text
 */
function toCamel(text) {
    // If already in camelCase (starts with lowercase and contains lowercase followed by uppercase), return as is
    if (/^[a-z][a-zA-Z0-9]*$/.test(text) && /[a-z][A-Z]/.test(text)) {
        return text;
    }
    
    let camelCase;
    // check if the text is in snake case first
    if (text.includes('_')) {
        const words = text.split('_');
        camelCase = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    } else if (/^[A-Z][a-zA-Z0-9]*$/.test(text) && /[A-Z][a-z]/.test(text)) {
        // Handle PascalCase - convert to camelCase
        camelCase = text.charAt(0).toLowerCase() + text.slice(1);
    } else {
        // Handle space-separated words and words with hyphens/dots
        const words = text.replace(/[^a-zA-Z0-9\s]/g, ' ').trim().split(/\s+/).filter(word => word.length > 0);
        camelCase = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
    }
    return camelCase;
}

/**
 * Converts text to snake_case
 * @param {string} text - The text to convert
 * @returns {string} - The snake_case text
 */
function toSnake(text) {
    // If already snake_case, return as is
    if (text.includes('_') && !/[A-Z]/.test(text) && !/[^a-zA-Z0-9_\s]/.test(text.replace(/\s/g, ''))) {
        return text.toLowerCase();
    }

    let snakeCase;

    if (/[a-z][A-Z]/.test(text)) {
        // Handle camelCase/PascalCase input
        snakeCase = text.replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
            .toLowerCase();
    } else {
        // Handle normal text input (spaces, hyphens, dots, etc.)
        snakeCase = text.replace(/[^a-zA-Z0-9\s]/g, ' ')  // Replace special chars with spaces
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '_');  // Replace spaces with underscores
    }
    return snakeCase;
}

/**
 * Converts text to CONSTANT_CASE
 * @param {string} text - The text to convert
 * @returns {string} - The CONSTANT_CASE text
 */
function toConstant(text) {
    // First convert to snake case, then uppercase
    const snakeCase = toSnake(text);
    return snakeCase.toUpperCase();
}

module.exports = {
    toUpper,
    toLower,
    toTitle,
    toCamel,
    toSnake,
    toConstant
};
