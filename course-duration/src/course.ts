import {Timer} from "./timer";

import {College} from "./college";

export class Course {
    private readonly name: string;
    private startTime: number;
    private durationInMinutes: number;
    private timer: Timer;
    private college: College;

    public constructor(name: string, timer?: Timer, college?: College) {
        this.name = name;
        this.durationInMinutes = 0;
        this.timer=timer|| new Timer();
        this.college =  college ||  new College();
    }
    
    public start(): void {
      this.startTime = this.getTime();
    }

    private getTime() {
        return this.timer.getTime();
    }

    public end(): void {
        this.durationInMinutes = this.getDurationInMinutes();
    }

    private getDurationInMinutes() {
        const endTime: number = this.getTime();
        return (endTime - this.startTime) / (1000 * 60);
    }

    public isShort(): boolean {
      const TenMinutes: number = 10 * 60;
      return this.durationInMinutes < TenMinutes;
    }
    
    public isLong(): boolean {
      return !this.isShort();
    }

    public getTitle(): string {
        return `${this.name} course in ${this.getCollege()} college`;
    }

    private getCollege(): string {
        return this.college.getName() ?? "not found";
    }

}


