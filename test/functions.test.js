const assert = require('assert');
const { toUpper, toLower, toTitle, toCamel, toSnake, toConstant } = require('../functions');

suite('Text Conversion Functions Test Suite', () => {
    
    suite('toUpper Tests', () => {
        test('should convert lowercase text to uppercase', () => {
            assert.strictEqual(toUpper('hello world'), 'HELLO WORLD');
        });
        
        test('should handle mixed case text', () => {
            assert.strictEqual(toUpper('Hello World'), 'HELLO WORLD');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toUpper(''), '');
        });
        
        test('should handle text with numbers and symbols', () => {
            assert.strictEqual(toUpper('hello123!@#'), 'HELLO123!@#');
        });
    });

    suite('toLower Tests', () => {
        test('should convert uppercase text to lowercase', () => {
            assert.strictEqual(toLower('HELLO WORLD'), 'hello world');
        });
        
        test('should handle mixed case text', () => {
            assert.strictEqual(toLower('Hello World'), 'hello world');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toLower(''), '');
        });
        
        test('should handle text with numbers and symbols', () => {
            assert.strictEqual(toLower('HELLO123!@#'), 'hello123!@#');
        });
    });

    suite('toTitle Tests', () => {
        test('should convert text to title case', () => {
            assert.strictEqual(toTitle('hello world'), 'Hello World');
        });
        
        test('should handle single word', () => {
            assert.strictEqual(toTitle('hello'), 'Hello');
        });
        
        test('should handle multiple spaces', () => {
            assert.strictEqual(toTitle('hello   world'), 'Hello   World');
        });
        
        test('should handle text with punctuation', () => {
            assert.strictEqual(toTitle('hello, world!'), 'Hello, World!');
        });
        
        test('should handle numbers and symbols', () => {
            assert.strictEqual(toTitle('hello 123 world'), 'Hello 123 World');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toTitle(''), '');
        });
    });

    suite('toCamel Tests', () => {
        test('should convert space-separated words to camelCase', () => {
            assert.strictEqual(toCamel('hello world'), 'helloWorld');
        });
        
        test('should convert snake_case to camelCase', () => {
            assert.strictEqual(toCamel('hello_world'), 'helloWorld');
        });
        
        test('should handle multiple words with spaces', () => {
            assert.strictEqual(toCamel('hello world test'), 'helloWorldTest');
        });
        
        test('should handle multiple words with underscores', () => {
            assert.strictEqual(toCamel('hello_world_test'), 'helloWorldTest');
        });
        
        test('should handle text with punctuation (spaces)', () => {
            assert.strictEqual(toCamel('hello, world!'), 'helloWorld');
        });
        
        test('should handle single word', () => {
            assert.strictEqual(toCamel('hello'), 'hello');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toCamel(''), '');
        });
        
        test('should handle mixed case input', () => {
            assert.strictEqual(toCamel('Hello World'), 'helloWorld');
        });
    });

    suite('toSnake Tests', () => {
        test('should convert space-separated words to snake_case', () => {
            assert.strictEqual(toSnake('hello world'), 'hello_world');
        });
        
        test('should convert camelCase to snake_case', () => {
            assert.strictEqual(toSnake('helloWorld'), 'hello_world');
        });
        
        test('should handle PascalCase', () => {
            assert.strictEqual(toSnake('HelloWorld'), 'hello_world');
        });
        
        test('should handle multiple words with spaces', () => {
            assert.strictEqual(toSnake('hello world test'), 'hello_world_test');
        });
        
        test('should handle text with punctuation', () => {
            assert.strictEqual(toSnake('hello, world!'), 'hello_world');
        });
        
        test('should handle single word', () => {
            assert.strictEqual(toSnake('hello'), 'hello');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toSnake(''), '');
        });
        
        test('should handle complex camelCase', () => {
            assert.strictEqual(toSnake('helloWorldTest'), 'hello_world_test');
        });
        
        test('should handle acronyms in camelCase', () => {
            assert.strictEqual(toSnake('XMLHttpRequest'), 'xml_http_request');
        });
    });

    suite('toConstant Tests', () => {
        test('should convert space-separated words to CONSTANT_CASE', () => {
            assert.strictEqual(toConstant('hello world'), 'HELLO_WORLD');
        });
        
        test('should convert camelCase to CONSTANT_CASE', () => {
            assert.strictEqual(toConstant('helloWorld'), 'HELLO_WORLD');
        });
        
        test('should convert snake_case to CONSTANT_CASE', () => {
            assert.strictEqual(toConstant('hello_world'), 'HELLO_WORLD');
        });
        
        test('should handle PascalCase', () => {
            assert.strictEqual(toConstant('HelloWorld'), 'HELLO_WORLD');
        });
        
        test('should handle multiple words with spaces', () => {
            assert.strictEqual(toConstant('hello world test'), 'HELLO_WORLD_TEST');
        });
        
        test('should handle text with punctuation', () => {
            assert.strictEqual(toConstant('hello, world!'), 'HELLO_WORLD');
        });
        
        test('should handle single word', () => {
            assert.strictEqual(toConstant('hello'), 'HELLO');
        });
        
        test('should handle empty string', () => {
            assert.strictEqual(toConstant(''), '');
        });
        
        test('should handle complex camelCase', () => {
            assert.strictEqual(toConstant('helloWorldTest'), 'HELLO_WORLD_TEST');
        });
    });

    suite('Edge Cases and Integration Tests', () => {
        test('should handle strings with only spaces', () => {
            assert.strictEqual(toUpper('   '), '   ');
            assert.strictEqual(toLower('   '), '   ');
            assert.strictEqual(toTitle('   '), '   ');
            assert.strictEqual(toCamel('   '), '');
            assert.strictEqual(toSnake('   '), '');
            assert.strictEqual(toConstant('   '), '');
        });
        
        test('should handle strings with numbers only', () => {
            assert.strictEqual(toUpper('123'), '123');
            assert.strictEqual(toLower('123'), '123');
            assert.strictEqual(toTitle('123'), '123');
            assert.strictEqual(toCamel('123'), '123');
            assert.strictEqual(toSnake('123'), '123');
            assert.strictEqual(toConstant('123'), '123');
        });
        
        test('should handle strings with special characters only', () => {
            assert.strictEqual(toUpper('!@#$%'), '!@#$%');
            assert.strictEqual(toLower('!@#$%'), '!@#$%');
            assert.strictEqual(toTitle('!@#$%'), '!@#$%');
            assert.strictEqual(toCamel('!@#$%'), '');
            assert.strictEqual(toSnake('!@#$%'), '');
            assert.strictEqual(toConstant('!@#$%'), '');
        });

        test('should handle very long strings', () => {
            const longString = 'this is a very long string with many words to test performance';
            const expectedCamel = 'thisIsAVeryLongStringWithManyWordsToTestPerformance';
            const expectedSnake = 'this_is_a_very_long_string_with_many_words_to_test_performance';
            const expectedConstant = 'THIS_IS_A_VERY_LONG_STRING_WITH_MANY_WORDS_TO_TEST_PERFORMANCE';
            
            assert.strictEqual(toCamel(longString), expectedCamel);
            assert.strictEqual(toSnake(longString), expectedSnake);
            assert.strictEqual(toConstant(longString), expectedConstant);
        });
    });
});