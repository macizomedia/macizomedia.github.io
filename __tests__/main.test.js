const { expect, test } = require('@jest/globals');

describe('DOM Element String Test', () => {
    test('checks if a div contains the string "The Abquanta Initiative"', () => {
        
        const div = document.createElement('div');
        div.textContent = 'The Abquanta Initiative';
        expect(div.textContent).toContain('The Abquanta Initiative');
    });
  });