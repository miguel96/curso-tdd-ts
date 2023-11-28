const fizz = 'Fizz';
const buzz = 'Buzz';

function isMultipleOf(inputNumber: number, multiple: number) {
    return (inputNumber % multiple) === 0;
}

function containsNumber(inputNumber: number, contains: number) {
    return inputNumber.toString().includes(contains.toString());
}

function getIsFizz(inputNumber: number) {
    let conditionNumber = 3;
    return isMultipleOf(inputNumber, conditionNumber) || containsNumber(inputNumber, conditionNumber);
}

function getIsBuzz(inputNumber: number) {
    let conditionNumber = 5;
    return isMultipleOf(inputNumber, conditionNumber) || containsNumber(inputNumber, conditionNumber);
}

function getFizzBuzz(inputNumber: number) {
    if (getIsFizz(inputNumber) && getIsBuzz(inputNumber)) {
        return `${fizz}${buzz}`;
    }
    if (getIsFizz(inputNumber)) {
        return fizz
    }
    if (getIsBuzz(inputNumber)) {
        return buzz
    }
    return inputNumber
}

function getArrayOf(n: number) {
    return new Array(n)
        .fill(undefined);
}

export const fizzBuzz = () => {

    return getArrayOf(100).map((el, index) => getFizzBuzz(index + 1))
}