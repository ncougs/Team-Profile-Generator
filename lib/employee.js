//Employee Class

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = 'Employee'
    };

    getName() {return this.name};
    getEmail() {return this.email};
    getRole() {return this.role};
    getID() {return this.id};
};

//Extension of Employee, Manager

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.role = 'Manager';
        this.officeNumber = officeNumber
      };

      getofficeNumber() {return this.officeNumber};
};

//Extension of Employee, Engineer

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.role = 'Engineer';
        this.gitHub = gitHub
      };

      getGithub() {return this.gitHub};
};

//Extension of Employee, Intern 

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = 'Intern';
        this.school = school
      };

      getSchool() {return this.school};
};

module.exports.Manager = Manager;
module.exports.Engineer = Engineer;
module.exports.Intern = Intern;




