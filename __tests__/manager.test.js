const Manager = require('./../src/employee/manager');

// section
describe('Manager class test', () => {

    // it can be instantiated
    it('can be instantiated', () => {
        const manager = new Manager("Manager Name", 710, 'xx@test.com')
        expect(manager).toBeInstanceOf(Manager);
    });

    // Constructor
    // take in the "name" argument and set it as property.
    it('sets the name as property in the constructor', () =>  {
        const name = "Manager Name";
        const manager = new Manager(name, 710, "xx@test.com");
        expect(manager.name).toBe(name);
    });
    
    //take in the "id" argument and set it as property.
    it('sets the id as property in the constructor', () =>  {
        const id = "710";
        const manager = new Manager("Manager Name", id, "xx@test.com");
        expect(manager.id).toBe(id);
    });

    //take in the "email" argument and set it as property.
    it('sets the email as property in the constructor', () =>  {
        const email = "xx@test.com";
        const manager = new Manager("Manager Name", 710, email);
        expect(manager.email).toBe(email);
    });
    
    // test: getName()
    it('can get the manager name by running the getName()', () => {
        const name = "Manager Name";
        const manager = new Manager(name, 710, 'xx@test.com');
        const result = manager.getName();
        expect(result).toBe(name);
    });
    
    // test: getEmail()
    it('can get the manager email by running the getEmail()', () => {
        const truth = "xx@test.com";
        const manager = new Manager("Manager Name", 710, truth);
        const result = manager.getEmail();
        expect(result).toBe(truth);
    });
    
    // test: getRole()
    it('can get the employee role by running the getRole()', () => {
        const truth = "Manager";
        const manager = new Manager("Manager Name", 710, "xx@test.com");
        const result = manager.getRole();
        expect(result).toBe(truth);
    });
    
    // test: getId()
    it('can get the Manager id by running the getId()', () => {
        const truth = "710";
        const manager = new Manager("Manager Name", truth, "xx@test.com");
        const result = manager.getId();
        expect(result).toBe(truth);
    });
});