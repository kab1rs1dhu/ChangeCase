const assert = require('assert');
const vscode = require('vscode');
const { toUpper, toLower, toTitle, toCamel, toSnake, toConstant } = require('../functions');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	suite('Function Integration Tests', () => {
		test('All functions should be properly exported and accessible', () => {
			assert.strictEqual(typeof toUpper, 'function');
			assert.strictEqual(typeof toLower, 'function');
			assert.strictEqual(typeof toTitle, 'function');
			assert.strictEqual(typeof toCamel, 'function');
			assert.strictEqual(typeof toSnake, 'function');
			assert.strictEqual(typeof toConstant, 'function');
		});

		test('Functions should handle typical programming scenarios', () => {
			// testing common programming naming conventions
			const testCases = [
				{
					input: 'user_name',
					expectedCamel: 'userName',
					expectedSnake: 'user_name',
					expectedConstant: 'USER_NAME',
					expectedTitle: 'User_name'
				},
				{
					input: 'getUserData',
					expectedCamel: 'getUserData',
					expectedSnake: 'get_user_data',
					expectedConstant: 'GET_USER_DATA',
					expectedTitle: 'Getuserdata'
				},
				{
					input: 'API_KEY',
					expectedCamel: 'apiKey',
					expectedSnake: 'api_key',
					expectedConstant: 'API_KEY',
					expectedTitle: 'Api_key'
				}
			];

			testCases.forEach(testCase => {
				assert.strictEqual(toCamel(testCase.input), testCase.expectedCamel);
				assert.strictEqual(toSnake(testCase.input), testCase.expectedSnake);
				assert.strictEqual(toConstant(testCase.input), testCase.expectedConstant);
				assert.strictEqual(toTitle(testCase.input), testCase.expectedTitle);
			});
		});

		test('Round-trip conversions should work correctly', () => {
			const originalText = 'hello world test';
			
			// Test snake -> camel -> snake
			const snake = toSnake(originalText);
			const camelFromSnake = toCamel(snake);
			const backToSnake = toSnake(camelFromSnake);
			assert.strictEqual(snake, backToSnake);

			// Test camel -> snake -> camel (with some caveats)
			const camelText = 'helloWorldTest';
			const snakeFromCamel = toSnake(camelText);
			const backToCamel = toCamel(snakeFromCamel);
			assert.strictEqual(camelText, backToCamel);
		});
	});

	suite('Error Handling Tests', () => {
		test('Functions should handle null and undefined gracefully', () => {
			// These tests check if functions throw errors or handle edge cases
			try {
				// These will likely throw errors, which is expected behavior
				toUpper(null);
				assert.fail('Should have thrown an error for null input');
			} catch (error) {
				assert.ok(error instanceof TypeError, 'Should throw TypeError for null input');
			}

			try {
				toLower(undefined);
				assert.fail('Should have thrown an error for undefined input');
			} catch (error) {
				assert.ok(error instanceof TypeError, 'Should throw TypeError for undefined input');
			}
		});
	});

	suite('Performance Tests', () => {
		test('Functions should handle large strings efficiently', () => {
			const largeString = 'word '.repeat(1000).trim(); // 1000 words
			
			const startTime = Date.now();
			const result = toCamel(largeString);
			const endTime = Date.now();
			
			// Should complete within reasonable time (less than 100ms)
			assert.ok(endTime - startTime < 100, 'Should process large strings quickly');
			assert.ok(result.length > 0, 'Should produce valid output');
		});
	});
});
