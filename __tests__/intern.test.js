const Intern = require('./../src/employee/intern');

// section
describe('Intern class test', () => {

    // it can be instantiated
    it('can be instantiated', () => {
        const intern = new Intern("Intern Name", 710, 'xx@test.com')
        expect(intern).toBeInstanceOf(Intern);
    });

    // Constructor
    // take in the "name" argument and set it as property.
    it('sets the name as property in the constructor', () =>  {
        const name = "Intern Name";
        const intern = new Intern(name, 710, "xx@test.com");
        expect(intern.name).toBe(name);
    });
    
    //take in the "id" argument and set it as property.
    it('sets the id as property in the constructor', () =>  {
        const id = "710";
        const intern = new Intern("Intern Name", id, "xx@test.com");
        expect(intern.id).toBe(id);
    });

    //take in the "email" argument and set it as property.
    it('sets the email as property in the constructor', () =>  {
        const email = "xx@test.com";
        const intern = new Intern("Intern Name", 710, email);
        expect(intern.email).toBe(email);
    });
    
    // test: getName()
    it('can get the intern name by running the getName()', () => {
        const name = "Intern Name";
        const intern = new Intern(name, 710, 'xx@test.com');
        const result = intern.getName();
        expect(result).toBe(name);
    });
    
    // test: getEmail()
    it('can get the intern email by running the getEmail()', () => {
        const truth = "xx@test.com";
        const intern = new Intern("Intern Name", 710, truth);
        const result = intern.getEmail();
        expect(result).toBe(truth);
    });
    
    // test: getRole()
    it('can get the employee role by running the getRole()', () => {
        const truth = "Intern";
        const intern = new Intern("Intern Name", 710, "xx@test.com");
        const result = intern.getRole();
        expect(result).toBe(truth);
    });
    
    // test: getId()
    it('can get the Intern id by running the getId()', () => {
        const truth = "710";
        const intern = new Intern("Intern Name", truth, "xx@test.com");
        const result = intern.getId();
        expect(result).toBe(truth);
    });
});