import {env} from "process";
import {College} from "./college";

export class CollegeEnv implements College{
    constructor() {
    }

    getName() {
        return env.college;
    }
}