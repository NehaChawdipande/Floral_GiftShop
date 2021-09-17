
import objectTest from './objectTest'
test('employee id to be 123',()=>
{
    const objTest = new objectTest();
    expect(objTest.employee.empid).toEqual(123);
})