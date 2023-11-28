import {fizzBuzz} from "../src/fizzbuzz";

describe('Fizzbuzz', () => {
  const fizz = 'Fizz';
  const buzz = 'Buzz';
  const fizzbuzz = 'FizzBuzz';
  const getElementFromNumber = (number: number, response: (string | number)[]) => response[number - 1]

  it('should return 100 items', () => {
    const resp = fizzBuzz();
    expect(resp).toHaveLength(100);
  })
  it('should return a list that contains numbers', () => {
    const resp = fizzBuzz();
    expect(getElementFromNumber(1, resp)).toEqual(1);
    expect(getElementFromNumber(98, resp)).toEqual(98);
    expect(getElementFromNumber(14, resp)).toEqual(14);
  })

  it('should return fizz when the number is multiple of 3', () => {
    const resp = fizzBuzz();

    expect(getElementFromNumber(3, resp)).toBe(fizz)
    expect(getElementFromNumber(6, resp)).toBe(fizz)
    expect(getElementFromNumber(18, resp)).toBe(fizz)
  })

  it('should return buzz when number is multiple of 5', () => {
    const resp = fizzBuzz();
    expect(getElementFromNumber(5, resp)).toBe(buzz)
    expect(getElementFromNumber(10, resp)).toBe(buzz)
    expect(getElementFromNumber(25, resp)).toBe(buzz)
  })

  it('should return fizzbuzz when the number is multiple of 3 and 5', () => {
    const resp = fizzBuzz();
    expect(getElementFromNumber(60, resp)).toBe(fizzbuzz)
    expect(getElementFromNumber(30, resp)).toBe(fizzbuzz)
  })

  it('should return fizz when the number contains a 3', ()=>{
    const resp = fizzBuzz();
    expect(getElementFromNumber(13, resp)).toBe(fizz);
  })

  it('should return buzz when the number contains a 5',()=>{
    const resp = fizzBuzz();
    expect(getElementFromNumber(52, resp)).toBe(buzz);
  })

  it('should return fizzbuzz when the number contains a 3 and a 5',()=>{
    const resp = fizzBuzz();
    expect(getElementFromNumber(53, resp)).toBe(fizzbuzz);
    expect(getElementFromNumber(35,resp)).toBe(fizzbuzz);

  })

  it('should return fizzbuzz when the number is a multiple of 3 and contains a 5',()=>{
    const resp = fizzBuzz();
    expect(getElementFromNumber(57,resp)).toBe(fizzbuzz);
    expect(getElementFromNumber(45,resp)).toBe(fizzbuzz);
  })

});

// A. Multiplo de 3-> Fizz
// B. Contiene 3-> Fizz
// C. Multiplo de 5 -> Buzz
// D. Contiene 5-> Buzz

// 1. B y C y D-> 35
// 2. A y C->60
// 3. A y D->57
// 4. A y B y C->30
// 5. A y C y D->45
// 6. A y b y C y D-> Imposible
// 7. B y C->No hay
// 8. B y D-> 53
// 9. C y D-> Buzz->5,25
// 10. ninguno-> Numero->1,98,14
// 11. A-> Fizz->6,18
// 12. A y B-> Fizz->3
// 13. C-> Buzz->10
// 14. D-> Buzz->52