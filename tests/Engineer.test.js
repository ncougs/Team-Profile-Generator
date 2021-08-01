// JS file required to test Engineer functions

const Employee = require('../lib/employee');

describe("Engineer", () => {

    describe("Initialization", () => {

        it(`It should create an object with key values of 'name', 'id', 'email', 'role' & 'github'`, () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
            
            expect(harry.name).toEqual('harry');
            expect(harry.id).toEqual('1');
            expect(harry.email).toEqual('harry@potter.com');
            expect(harry.role).toEqual('Manager');
            expect(harry.github).toEqual('ncougs');

        });
  
        it("It should create a method of getName", () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
    
            expect(harry.getName()).toEqual('harry');
        });

        it("It should create a method of getEmail", () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
    
            expect(harry.getEmail()).toEqual('harry@potter.com');
        });

        it("It should create a method of getID", () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
    
            expect(harry.getID()).toEqual('1');
        });

        it("It should create a method of getRole", () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
    
            expect(harry.getRole()).toEqual('Engineer');
        });

        it("It should create a method of getGitHub", () => {
            const harry = new Employee.Engineer('harry', '1', 'harry@potter.com', 'ncougs');
    
            expect(harry.getGithub()).toEqual('ncougs');
        });
  
    });
    
  });

