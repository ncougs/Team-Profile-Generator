// JS file required to test Intern functions

const Employee = require('../lib/employee');

describe("Intern", () => {

    describe("Initialization", () => {

        it(`It should create an object with key values of 'name', 'id', 'email', 'role' & 'school'`, () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
            
            expect(harry.name).toEqual('harry');
            expect(harry.id).toEqual('1');
            expect(harry.email).toEqual('harry@potter.com');
            expect(harry.role).toEqual('Intern');
            expect(harry.school).toEqual('Monash');

        });
  
        it("It should create a method of getName", () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
    
            expect(harry.getName()).toEqual('harry');
        });

        it("It should create a method of getEmail", () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
    
            expect(harry.getEmail()).toEqual('harry@potter.com');
        });

        it("It should create a method of getID", () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
    
            expect(harry.getID()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
    
            expect(harry.getRole()).toEqual('Intern');
        });

        it("It should create a method of getSchool", () => {
            const harry = new Employee.Intern('harry', '1', 'harry@potter.com', 'Monash');
    
            expect(harry.getSchool()).toEqual('Monash');
        });
  
    });
    
  });

