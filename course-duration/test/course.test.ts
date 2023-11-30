import {Course} from "../src/course";
import {Timer} from '../src/timer';
import {College} from "../src/college";

const aTimer = (startTime: number) =>{
    const testTimer = new Timer();
    const fakeGetTime = jest.fn(() => startTime)
    testTimer.getTime = fakeGetTime;
    return testTimer as Timer & {getTime: typeof fakeGetTime};
}

const aCollege = (college?: string) =>{
    const testCollege = new College();
    const fakeCollege= jest.fn((): string | undefined => '');
    testCollege.getName = fakeCollege;
    fakeCollege.mockReturnValue(college);
    return testCollege as Timer & {getName: typeof fakeCollege};
}

const aCourse = (duration:number, college?:string,name:string='testName')=>{
    const startTime = 15;
    const testTimer = aTimer(startTime);
    const testCollege = aCollege(college)

    const course = new Course(name, testTimer, testCollege);

    course.start();
    testTimer.getTime.mockReturnValue(duration+startTime);
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