import {CoffeeMachine,DrinkMaker} from "../src/coffeeMachine";

class TestDrinkMaker implements DrinkMaker{
  command: string;
  execute(command: string) {
    this.command=command;
  }
}

describe('Coffee Machine', () => {

  it('should serve chocolate', () => {
    const testDrinkMaker = new TestDrinkMaker()
    const coffeeMachine = new CoffeeMachine(testDrinkMaker);
    coffeeMachine.selectChocolate();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.command).toBe('H::')
  });

  it('should let add one spoon of sugar',()=>{
    const testDrinkMaker = new TestDrinkMaker()
    const coffeeMachine = new CoffeeMachine(testDrinkMaker);

    coffeeMachine.selectTea();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.command).toBe('T:1:0')
  });

  it('should let add two spoons of sugar',()=>{
    const testDrinkMaker = new TestDrinkMaker()
    const coffeeMachine = new CoffeeMachine(testDrinkMaker);

    coffeeMachine.selectCoffee();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.command).toBe('C:2:0')
  });
});