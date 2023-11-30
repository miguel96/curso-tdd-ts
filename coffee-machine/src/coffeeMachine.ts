
export interface DrinkMaker {
    execute(command:string):void;
}


export class CoffeeMachine {
    private drinkType: string;
    private spoonsOfSugar: number=0;

    constructor(readonly  drinkMaker: DrinkMaker) {
    }

    selectTea(){
        this.drinkType = 'T';
    }

    selectCoffee():void {
        this.drinkType = 'C';
    }

    selectChocolate(){
        this.drinkType = 'H';
    }

    private getCommand():string {
       return this.sugarLimit()
        || `${this.drinkType}:${this.spoonsOfSugar||''}:${this.spoonsOfSugar?'0':''}`
    }

    private sugarLimit() {
        return this.spoonsOfSugar > 2
            ? 'M:SUGAR_ERROR'
            : false;
    }

    makeDrink(): void {
        this.drinkMaker.execute(this.getCommand());
    }


    addOneSpoonOfSugar():void {
        this.spoonsOfSugar += 1;
    }

}