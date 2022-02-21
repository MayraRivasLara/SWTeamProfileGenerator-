const Employee = require('./../src/employee/employee');

// section
describe('Employee class test', ()  => {

    // it can be instantiated
    it('can be instantiated', () => {
        const employee = new Employee("Employee Name", 710, 'xx@test.com')
        expect(employee).toBeInstanceOf(Employee);

    });
    
    // Constructor
    // take in the "name" argument and set it as property.
    it('sets the name as property in the constructor', () =>  {
        const name = "Employee Name";
        const employee = new Employee(name, 710, "xx@test.com");
        expect(employee.name).toBe(name);
    });

    //take in the "id" argument and set it as property.
    it('sets the id as property in the constructor', () =>  {
        const id = "710";
        const employee = new Employee("Employee Name", id, "xx@test.com");
        expect(employee.id).toBe(id);
    });

    //take in the "email" argument and set it as property.
    it('sets the email as property in the constructor', () =>  {
        const email = "xx@test.com";
        const employee = new Employee("Employee Name", 710, email);
        expect(employee.email).toBe(email);
    });
    
    // test: getName()
    it('can get the employee name by running the getName()', () => {
        const name = "Employee Name";
        const employee = new Employee(name, 710, 'xx@test.com');
        const result = employee.getName();
        expect(result).toBe(name);
    });
});

// test: getEmail()
it('can get the employee email by running the getEmail()', () => {
    const truth = "xx@test.com";
    const employee = new Employee("Employee Name", 710, truth);
    const result = employee.getEmail();
    expect(result).toBe(truth);
});

// test: getRole()
it('can get the employee role by running the getRole()', () => {
    const truth = "Employee";
    const employee = new Employee("Employee Name", 710, "xx@test.com");
    const result = employee.getRole();
    expect(result).toBe(truth);
});

// test: getId()
it('can get the employee id by running the getId()', () => {
    const truth = "710";
    const employee = new Employee("Employee Name", truth, "xx@test.com");
    const result = employee.getId();
    expect(result).toBe(truth);
});