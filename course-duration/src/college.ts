import {env} from "process";

export class College {
    constructor() {
    }

    getName() {
        return env.college;
    }
}