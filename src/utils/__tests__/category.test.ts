import { processString } from "../category";

describe('processString', () => {
    // Returns a lowercase string without diacritics and spaces.
    it('should return a lowercase string without diacritics and spaces', () => {
        const result = processString('Ábc Déf');
        expect(result).toBe('abcdef');
      });
    
    // Returns the same string when given a string without diacritics or spaces.
    it('should return the same string when given a string without diacritics or spaces', () => {
        const result = processString('abcdef');
        expect(result).toBe('abcdef');
    });

    // We expect the output to be the version without accents and without spaces
    it('should process the string correctly', () => {
    const inputString = 'Kiegészítők értékesítése';
    const processedString = processString(inputString);
    
    expect(processedString).toBe('kiegeszitokertekesitese');
  });
});