import {Course} from "../src/course";
import {Timer} from "../src/timer";
import {College} from "../src/college";

class FakeTimer implements Timer {
    private nextTime = 0;
    constructor() {
    }
    getTime(): number {
        return this.nextTime;
    }
    setNextTime(nextTime:number):void{
        this.nextTime = nextTime
    }
}

class FakeCollege implements College {
    constructor(private readonly name :string|undefined) {
    }

    getName(): string | undefined {
        return this.name;
    }
}


const aCourse = (duration:number, collegeName?:string,name:string='testName')=>{
    const startTime = 15;
    const testTimer = new FakeTimer();
    const testCollege = new FakeCollege(collegeName);

    const course = new Course(name, testTimer, testCollege);
    testTimer.setNextTime(startTime);
    course.start();
    testTimer.setNextTime(duration+startTime)
    course.end();

    return course;
}



describe('Course', () => {

    const courseName = 'macramé';
    const minLongCourseDuration = 10 * 60 * 60 * 1000;


    it('identifies short courses', () => {

        const course = aCourse(minLongCourseDuration - 1)

        expect(course.isShort())
            .toBe(true);
    });

    it('identifies long courses',()=>{
        const longCourse= aCourse(minLongCourseDuration)

        expect(longCourse.isLong())
            .toBe(true)
    });

    it('knows the course title',()=>{
        const course = aCourse(
            0,
            'testCollege',
            courseName
        )

        expect(course.getTitle())
            .toBe(`${courseName} course in testCollege college`);
    });

    it('knows the course title when college is undefined',()=>{
        const course = aCourse(
            0,
            undefined,
            courseName
        )


        expect(course.getTitle())
            .toBe(`${courseName} course in not found college`);
    });
});