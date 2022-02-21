const Engineer = require('./../src/employee/engineer');

//section
describe('Engineer class test', () => {
    
    //it can be initiated
    it('can be instantiated', () => {
        const engineer = new Engineer("Engineer Name", 710, 'xx@test.com')
        expect(engineer).toBeInstanceOf(Engineer);
    });

    //Constructor
    // Setting name argument and setting it as property.
    it('sets the name as property in the constructor', () =>  {
        const name = "Engineer Name";
        const engineer = new Engineer(name, 710, "xx@test.com");
        expect(engineer.name).toBe(name);
    });

    //take in the "id" argument and set it as property.
    it('sets the id as property in the constructor', () =>  {
        const id = "710";
        const engineer = new Engineer("Employee Name", id, "xx@test.com");
        expect(engineer.id).toBe(id);
    });

    //take in the "email" argument and set it as property.
    it('sets the email as property in the constructor', () =>  {
        const email = "xx@test.com";
        const engineer = new Engineer("Employee Name", 710, email);
        expect(engineer.email).toBe(email);
    });

    // test: getName()
    it('can get the engineer name by running the getName()', () => {
        const name = "engineer Name";
        const engineer = new Engineer(name, 710, 'xx@test.com');
        const result = engineer.getName();
        expect(result).toBe(name);
    });

    // test: getEmail()
    it('can get the engineer email by running the getEmail()', () => {
        const truth = "xx@test.com";
        const engineer = new Engineer("Engineer Name", 710, truth);
        const result = engineer.getEmail();
        expect(result).toBe(truth);
    });
    
    // test: getRole()
    it('can get the engineer role by running the getRole()', () => {
        const truth = "Engineer";
        const engineer = new Engineer("Engineer Name", 710, "xx@test.com");
        const result = engineer.getRole();
        expect(result).toBe(truth);
    });
    
    // test: getId()
    it('can get the engineer id by running the getId()', () => {
        const truth = "710";
        const engineer = new Engineer("Engineer Name", truth, "xx@test.com");
        const result = engineer.getId();
        expect(result).toBe(truth);
    });
});

