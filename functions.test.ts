const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return an array', () => {
        const inputArray = [11, 21, 34, 75, 29];
        const shuffledArray = shuffleArray(inputArray);
        expect(Array.isArray(shuffledArray)).toBe(true);
      });

    test('shuffleArray should return an array with the same length as the input array', () => {
        const inputArray = [66, 33, 22, 44, 99];
        const shuffledArray = shuffleArray(inputArray);
        expect(shuffledArray.length).toBe(inputArray.length);
      });
})