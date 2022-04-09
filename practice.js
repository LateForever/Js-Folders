// super = Reference to the parent class (super class)
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods

class Person {
  constructor(id, login, password) {
    this.id = id;
    this.login = login;
    this.password = password;
  }

  generateID() {
    let choice;
    let result = "";
    let idSign = "id_";

    for (let i = 0; i < 16; i++) {
      choice = Math.floor(Math.random() * 1 + i);
      result += String(choice);
    }

    return idSign + result;
  }

  checkIfPasswordIsNotTooWeak() {
    let allPasswords = ["password", "tajnehaslo", "haslo", "secret"];
    let characters = "!@#$%^&*()_-+=[{]}|;:',<.>/?`~";
    let bigLettersCheck = 0;
    let uniqueCharacterCheck = 0;
    let messages = {
      succes: "Password is strong",
      error: [
        "Password is too weak",
        "Password needs to have one big letter",
        "Password needs to have one special character",
      ],
    };

    for (let i = 0; i < this.password.length; i++) {
      if (this.password[i] === this.password[i].toUpperCase()) {
        bigLettersCheck += 1;
      }
    }

    if (bigLettersCheck === 0) {
      return messages.error[1];
    }

    for (let i = 0; i < this.password.length; i++) {
      for (let x = 0; x < characters.length; x++) {
        if (this.password[i] === characters[x]) {
          uniqueCharacterCheck = 1;
        }
      }
    }

    if (uniqueCharacterCheck === 0) {
      return messages.error[2];
    }

    for (let i = 0; i < allPasswords.length; i++) {
      if (this.password === allPasswords[i]) {
        return messages.error[0];
      } else {
        return messages.succes;
      }
    }
  }
}

class Teacher extends Person {
  constructor(id, login, password, teacher_id) {
    super(id, login, password);
    this.teacher_id = teacher_id;
  }
}

class Student extends Person {
  constructor(id, student_id, login, password, profile_pic, background_pic) {
    super(id, login, password);
    this.student_id = student_id;
    this.profile_pic = profile_pic;
    this.background_pic = background_pic;
  }

  createUser() {
    this.id = super.generateID();

    console.log(this.id);
  }
}

let student1 = new Student(
  null,
  4,
  "login",
  "Password!",
  "profile.png",
  "background.png"
);

student1.createUser();
let c = student1.checkIfPasswordIsNotTooWeak();
console.log(c);
