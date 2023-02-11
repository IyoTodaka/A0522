export const sumOfTwoNumbers = (a: number, b: number) => a + b;

// export const sumOfNumbers = (...numbers: number[]) => numbers.reduce((acc, curr) => acc+curr, 0);
export const sumOfNumbers = (...numbers: number[]) => {
    return numbers.reduce(sumOfTwoNumbers, 0);
}

//in-source test suite
if(import.meta.vitest) {
    const { describe, it, expect } = import.meta.vitest

    describe('sum of two numbers', () => {
        it('should return the sum of two numbers', () => {
            expect(sumOfTwoNumbers(2, 3)).toBe(5)
        })
    })

    describe('sum of n numbers', () => {
        it('should return 0, if no arguments are passed', () => {
            expect(sumOfNumbers()).toBe(0)
        })

        it('should return the sum of all numbers', () => {
            expect(sumOfNumbers(1,2,3,4)).toBe(10)
        })
    })
}
