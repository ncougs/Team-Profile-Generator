// JS file required to test Employee functions

const Employee = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {

        it(`It should create an object with key values of 'name', 'id', 'email' & 'role'.`, () => {
            const harry = new Employee('harry', '1', 'harry@potter.com');
            
            expect(harry.name).toEqual('harry');
            expect(harry.id).toEqual('1');
            expect(harry.email).toEqual('harry@potter.com');
            expect(harry.role).toEqual('Employee');
        });
  
        it("It should create a method of getName", () => {
            const harry = new Employee('harry', '1', 'harry@potter.com');
    
            expect(harry.getName()).toEqual('harry');
        });

        it("It should create a method of getEmail", () => {
            const harry = new Employee('harry', '1', 'harry@potter.com');
    
            expect(harry.getEmail()).toEqual('harry@potter.com');
        });

        it("It should create a method of getID", () => {
            const harry = new Employee('harry', '1', 'harry@potter.com');
    
            expect(harry.getID()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const harry = new Employee('harry', '1', 'harry@potter.com');
    
            expect(harry.getRole()).toEqual('Employee');
        });
  
    });
    
  });

