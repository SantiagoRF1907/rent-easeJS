function addUser(user) {
  let users = JSON.parse(localStorage.getItem("users"));
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return users;
}

function removeUser(user) {
  let users = JSON.parse(localStorage.getItem("users"));
  users = users.filter((f) => f != user);
  localStorage.setItem("users", JSON.stringify(users));
  return users;
}

// User Class
class User {
  constructor(email, password, firstName, lastName, birthDate) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
  }

  toString() {
    return `email: ${this.email}, password: ${this.password}, firstName: ${this.firstName}, lastName: ${this.lastName}, birthDate: ${this.birthDate}`;
  }

  toJSONString() {
    return JSON.stringify(this);
  }

  static toObj(userJSONString) {
    let userObj = JSON.parse(userJSONString);
    return new User(
      userObj.email,
      userObj.password,
      userObj.firstName,
      userObj.lastName,
      userObj.birthDate
    );
  }
}
