import {Course} from "../src/course";
import {Timer} from '../src/timer';
import {College} from "../src/college";


class BuilderCourse {
    private duration: number=0;
    private college: string|undefined='123';
    private startTime: number = 15;
    private name: string= 'test';
    constructor() {
    }

    withDuration(duration:number){
        this.duration = duration;
        return this;
    }

    withCollege(college:string|undefined){
        this.college=college;
        return this;
    }

    withName(name:string){
        this.name=name;
        return this;
    }

    build(){
        const testTimer = new Timer();
        const fakeGetTime = jest.fn(() => this.startTime)
        testTimer.getTime = fakeGetTime;

        const testCollege = new College();
        const fakeGetEnv= jest.fn((): string | undefined => '');
        testCollege.getName = fakeGetEnv;
        fakeGetEnv.mockReturnValue(this.college);

        const course = new Course(this.name, testTimer,testCollege);

        course.start();
        fakeGetTime.mockReturnValue(this.duration+this.startTime);
        course.end();

        return course;
    }
}
const courseName = 'macramé';


describe('Course', () => {

    it('identifies short courses', () => {
        const course = new BuilderCourse()
            .withDuration(10 * 60 * 60 * 1000 - 1)
            .build();


        expect(course.isShort())
            .toBe(true);
    });

    it('identifies long courses',()=>{
        const longCourse= new BuilderCourse()
            .withDuration(10 * 60 * 60 * 1000)
            .build()

        expect(longCourse.isLong())
            .toBe(true)
    });

    it('knows the course title',()=>{
        const course = new BuilderCourse()
                .withCollege('testCollege')
                .withName(courseName)
                .build();

        expect(course.getTitle())
            .toBe(`${courseName} course in testCollege college`);
    });

    it('knows the course title when college is undefined',()=>{
        const course = new BuilderCourse()
            .withCollege(undefined)
            .withName(courseName)
            .build();

        expect(course.getTitle())
            .toBe(`${courseName} course in not found college`);
    });
});