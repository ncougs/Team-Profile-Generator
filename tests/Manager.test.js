// JS file required to test Manager functions

const Employee = require('../lib/employee');

describe("Manager", () => {

    describe("Initialization", () => {

        it(`It should create an object with key values of 'name', 'id', 'email', 'role' & 'officeNumber'`, () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
            
            expect(harry.name).toEqual('harry');
            expect(harry.id).toEqual('1');
            expect(harry.email).toEqual('harry@potter.com');
            expect(harry.role).toEqual('Manager');
            expect(harry.officeNumber).toEqual('99');

        });
  
        it("It should create a method of getName", () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
    
            expect(harry.getName()).toEqual('harry');
        });

        it("It should create a method of getEmail", () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
    
            expect(harry.getEmail()).toEqual('harry@potter.com');
        });

        it("It should create a method of getID", () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
    
            expect(harry.getID()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
    
            expect(harry.getRole()).toEqual('Manager');
        });

        it("It should create a method of getOfficeNumber", () => {
            const harry = new Employee.Manager('harry', '1', 'harry@potter.com', '99');
    
            expect(harry.getOfficeNumber()).toEqual('99');
        });
  
    });
    
  });

