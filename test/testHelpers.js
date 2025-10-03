/**
 * Test helper utilities for the ChangeCase extension
 */

/**
 * Helper function to test multiple case conversions at once
 * @param {string} input - The input text
 * @param {Object} expected - Object containing expected outputs for each function
 */
function testAllCases(input, expected) {
    const { toUpper, toLower, toTitle, toCamel, toSnake, toConstant } = require('../functions');
    
    const results = {
        upper: toUpper(input),
        lower: toLower(input),
        title: toTitle(input),
        camel: toCamel(input),
        snake: toSnake(input),
        constant: toConstant(input)
    };

    return {
        input,
        results,
        expected,
        matches: {
            upper: expected.upper ? results.upper === expected.upper : null,
            lower: expected.lower ? results.lower === expected.lower : null,
            title: expected.title ? results.title === expected.title : null,
            camel: expected.camel ? results.camel === expected.camel : null,
            snake: expected.snake ? results.snake === expected.snake : null,
            constant: expected.constant ? results.constant === expected.constant : null
        }
    };
}

/**
 * Generate test cases for common programming scenarios
 */
function generateProgrammingTestCases() {
    return [
        {
            name: 'Snake case variable',
            input: 'user_name',
            expected: {
                upper: 'USER_NAME',
                lower: 'user_name',
                title: 'User_name',
                camel: 'userName',
                snake: 'user_name',
                constant: 'USER_NAME'
            }
        },
        {
            name: 'Camel case function',
            input: 'getUserData',
            expected: {
                upper: 'GETUSERDATA',
                lower: 'getuserdata',
                title: 'Getuserdata',
                camel: 'getUserData',
                snake: 'get_user_data',
                constant: 'GET_USER_DATA'
            }
        },
        {
            name: 'Pascal case class',
            input: 'UserAccount',
            expected: {
                upper: 'USERACCOUNT',
                lower: 'useraccount',
                title: 'Useraccount',
                camel: 'userAccount',
                snake: 'user_account',
                constant: 'USER_ACCOUNT'
            }
        },
        {
            name: 'Constant case',
            input: 'API_KEY',
            expected: {
                upper: 'API_KEY',
                lower: 'api_key',
                title: 'Api_key',
                camel: 'apiKey',
                snake: 'api_key',
                constant: 'API_KEY'
            }
        },
        {
            name: 'Space separated words',
            input: 'hello world',
            expected: {
                upper: 'HELLO WORLD',
                lower: 'hello world',
                title: 'Hello World',
                camel: 'helloWorld',
                snake: 'hello_world',
                constant: 'HELLO_WORLD'
            }
        }
    ];
}

/**
 * Performance testing helper
 * @param {Function} fn - Function to test
 * @param {string} input - Input to pass to the function
 * @param {number} iterations - Number of iterations to run
 * @returns {Object} Performance results
 */
function performanceTest(fn, input, iterations = 1000) {
    const startTime = process.hrtime.bigint();
    
    for (let i = 0; i < iterations; i++) {
        fn(input);
    }
    
    const endTime = process.hrtime.bigint();
    const durationMs = Number(endTime - startTime) / 1000000; // Convert to milliseconds
    
    return {
        totalTime: durationMs,
        averageTime: durationMs / iterations,
        iterations
    };
}

/**
 * Validate that a function produces consistent results
 * @param {Function} fn - Function to test
 * @param {Array} inputs - Array of inputs to test
 * @returns {boolean} True if all results are consistent
 */
function validateConsistency(fn, inputs) {
    return inputs.every(input => {
        const result1 = fn(input);
        const result2 = fn(input);
        return result1 === result2;
    });
}

/**
 * Test edge cases for all functions
 */
function getEdgeCases() {
    return [
        '',                    // Empty string
        ' ',                   // Single space
        '   ',                 // Multiple spaces
        'a',                   // Single character
        'A',                   // Single uppercase character
        '123',                 // Numbers only
        '!@#$%',              // Special characters only
        'a1b2c3',             // Mixed alphanumeric
        'hello_world_test',    // Multiple underscores
        'helloWorldTestCase',  // Long camelCase
        'HELLO_WORLD_TEST',    // Long constant case
        'Hello World Test',    // Multiple words with spaces
        'hello-world-test',    // Hyphenated words
        'hello.world.test',    // Dot separated
    ];
}

module.exports = {
    testAllCases,
    generateProgrammingTestCases,
    performanceTest,
    validateConsistency,
    getEdgeCases
};