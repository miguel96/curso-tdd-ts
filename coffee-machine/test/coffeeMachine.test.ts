import {CoffeeMachine,DrinkMaker} from "../src/coffeeMachine";


describe('Coffee Machine', () => {
  let testDrinkMaker: DrinkMaker;
  let coffeeMachine: CoffeeMachine;
  beforeEach(()=>{
     testDrinkMaker = {
      execute: jest.fn(),
    }
     coffeeMachine = new CoffeeMachine(testDrinkMaker);
  })

  it('should serve chocolate', () => {
    coffeeMachine.selectChocolate();
    coffeeMachine.makeDrink();
    expect(testDrinkMaker.execute).toHaveBeenCalledWith('H::')
  });

  it('should serve tea', () => {
    coffeeMachine.selectTea();
    coffeeMachine.makeDrink();
    expect(testDrinkMaker.execute).toHaveBeenCalledWith('T::')
  });

  it('should serve coffee', () => {
    coffeeMachine.selectCoffee();
    coffeeMachine.makeDrink();
    expect(testDrinkMaker.execute).toHaveBeenCalledWith('C::')
  });

  it('should let add one spoon of sugar',()=>{

    coffeeMachine.selectTea();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.execute).toHaveBeenCalledWith(expect.stringMatching(':1:0'))
  });

  it('should let add two spoons of sugar',()=>{

    coffeeMachine.selectCoffee();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.execute).toHaveBeenCalledWith(expect.stringMatching(':2:0'))
  });

  it('should display an error message if there are more than 2 spoons of sugar',()=>{
    coffeeMachine.selectCoffee();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.addOneSpoonOfSugar();
    coffeeMachine.makeDrink();

    expect(testDrinkMaker.execute).toHaveBeenCalledWith(expect.stringMatching('M:SUGAR_ERROR'))
  })

});
