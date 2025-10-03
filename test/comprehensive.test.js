const assert = require('assert');
const { 
    testAllCases, 
    generateProgrammingTestCases, 
    performanceTest, 
    validateConsistency, 
    getEdgeCases 
} = require('./testHelpers');
const { toUpper, toLower, toTitle, toCamel, toSnake, toConstant } = require('../functions');

suite('Comprehensive Test Suite with Helpers', () => {
    
    suite('Programming Scenarios Tests', () => {
        test('should handle common programming variable naming conventions', () => {
            const testCases = generateProgrammingTestCases();
            
            testCases.forEach(testCase => {
                const result = testAllCases(testCase.input, testCase.expected);
                
                // Check each conversion
                Object.keys(testCase.expected).forEach(caseType => {
                    assert.strictEqual(
                        result.results[caseType], 
                        testCase.expected[caseType],
                        `Failed ${caseType} conversion for "${testCase.name}" (input: "${testCase.input}")`
                    );
                });
            });
        });
    });

    suite('Edge Cases Tests', () => {
        test('should handle all edge cases without throwing errors', () => {
            const edgeCases = getEdgeCases();
            
            edgeCases.forEach(input => {

                assert.doesNotThrow(() => toUpper(input), `toUpper failed for input: "${input}"`);
                assert.doesNotThrow(() => toLower(input), `toLower failed for input: "${input}"`);
                assert.doesNotThrow(() => toTitle(input), `toTitle failed for input: "${input}"`);
                assert.doesNotThrow(() => toCamel(input), `toCamel failed for input: "${input}"`);
                assert.doesNotThrow(() => toSnake(input), `toSnake failed for input: "${input}"`);
                assert.doesNotThrow(() => toConstant(input), `toConstant failed for input: "${input}"`);
            });
        });

        test('should produce consistent results for edge cases', () => {
            const edgeCases = getEdgeCases();
            
            assert.ok(validateConsistency(toUpper, edgeCases), 'toUpper should be consistent');
            assert.ok(validateConsistency(toLower, edgeCases), 'toLower should be consistent');
            assert.ok(validateConsistency(toTitle, edgeCases), 'toTitle should be consistent');
            assert.ok(validateConsistency(toCamel, edgeCases), 'toCamel should be consistent');
            assert.ok(validateConsistency(toSnake, edgeCases), 'toSnake should be consistent');
            assert.ok(validateConsistency(toConstant, edgeCases), 'toConstant should be consistent');
        });
    });

    suite('Performance Tests', () => {
        test('should perform well with reasonable inputs', () => {
            const testInput = 'hello world test case for performance';
            const iterations = 1000;
            
            const functions = [
                { name: 'toUpper', fn: toUpper },
                { name: 'toLower', fn: toLower },
                { name: 'toTitle', fn: toTitle },
                { name: 'toCamel', fn: toCamel },
                { name: 'toSnake', fn: toSnake },
                { name: 'toConstant', fn: toConstant }
            ];
            
            functions.forEach(({ name, fn }) => {
                const result = performanceTest(fn, testInput, iterations);
                
                // Should complete all iterations in less than 100ms
                assert.ok(result.totalTime < 100, 
                    `${name} took too long: ${result.totalTime}ms for ${iterations} iterations`);
                
                // Average time per operation should be very fast
                assert.ok(result.averageTime < 0.1, 
                    `${name} average time too slow: ${result.averageTime}ms per operation`);
            });
        });
    });

    suite('Conversion Chain Tests', () => {
        test('should handle conversion chains correctly', () => {
            const originalText = 'hello world test';
            
            // Test various conversion chains
            const chain1 = toConstant(toSnake(toCamel(originalText)));
            assert.strictEqual(chain1, 'HELLO_WORLD_TEST');
            
            const chain2 = toCamel(toSnake(toTitle(originalText)));
            assert.strictEqual(chain2, 'helloWorldTest');
            
            const chain3 = toSnake(toCamel(toTitle(originalText)));
            assert.strictEqual(chain3, 'hello_world_test');
        });

        test('should maintain idempotency where applicable', () => {
            const testCases = [
                { input: 'HELLO_WORLD', fn: toConstant },
                { input: 'hello_world', fn: toSnake },
                { input: 'helloWorld', fn: toCamel },
                { input: 'HELLO WORLD', fn: toUpper },
                { input: 'hello world', fn: toLower }
            ];
            
            testCases.forEach(({ input, fn }) => {
                const result1 = fn(input);
                const result2 = fn(result1);
                assert.strictEqual(result1, result2, 
                    `Function should be idempotent for input: "${input}"`);
            });
        });
    });

    suite('Real-world Examples Tests', () => {
        test('should handle real programming examples', () => {
            const realWorldExamples = [
                {
                    name: 'JavaScript variable',
                    input: 'getElementById',
                    expectedSnake: 'get_element_by_id',
                    expectedConstant: 'GET_ELEMENT_BY_ID'
                },
                {
                    name: 'Database column',
                    input: 'created_at',
                    expectedCamel: 'createdAt',
                    expectedTitle: 'Created_at'
                },
                {
                    name: 'CSS class',
                    input: 'nav-menu-item',
                    expectedCamel: 'navMenuItem',
                    expectedSnake: 'nav_menu_item'
                },
                {
                    name: 'API endpoint',
                    input: 'users/profile',
                    expectedCamel: 'usersProfile',
                    expectedSnake: 'users_profile'
                }
            ];

            realWorldExamples.forEach(example => {
                if (example.expectedSnake) {
                    assert.strictEqual(toSnake(example.input), example.expectedSnake,
                        `Snake case conversion failed for ${example.name}`);
                }
                if (example.expectedCamel) {
                    assert.strictEqual(toCamel(example.input), example.expectedCamel,
                        `Camel case conversion failed for ${example.name}`);
                }
                if (example.expectedConstant) {
                    assert.strictEqual(toConstant(example.input), example.expectedConstant,
                        `Constant case conversion failed for ${example.name}`);
                }
                if (example.expectedTitle) {
                    assert.strictEqual(toTitle(example.input), example.expectedTitle,
                        `Title case conversion failed for ${example.name}`);
                }
            });
        });
    });
});