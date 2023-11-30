import {Timer} from "./timer";

export class SystemTimer implements Timer{
    getTime() {
        return Date.now();
    }
}