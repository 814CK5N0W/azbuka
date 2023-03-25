import * as roman from './azbuka.roman'


describe('roman-numerals', () => {
    it('should translate number to roman numeral', async () => {
        const number = 10
        expect(roman.translate(10)).not.toBeNull()
    })

})