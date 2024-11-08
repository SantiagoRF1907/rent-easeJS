// Define variables
let users = [];
let apts = [];
let cities = [];

// Apartment class
class Apt {
  constructor(
    city,
    stName,
    stNumber,
    areaSize,
    hasAC,
    yearBuilt,
    rentPrice,
    dateAvailable
  ) {
    this.city = city;
    this.stName = stName;
    this.stNumber = stNumber;
    this.areaSize = areaSize;
    this.hasAC = hasAC;
    this.yearBuilt = yearBuilt;
    this.rentPrice = rentPrice;
    this.dateAvailable = dateAvailable;
  }

  toString() {
    return `city: ${this.city}, stName: ${this.stName}, stNumber: ${this.stNumber}, areaSize: ${this.areaSize}, hasAC: ${this.hasAC}, yearBuilt: ${this.yearBuilt}, rentPrice: ${this.rentPrice}, dateAvailable: ${this.dateAvailable}`;
  }
  toJSONString() {
    return JSON.stringify(this);
  }

  static toObj(aptJSONString) {
    let aptObj = JSON.parse(aptJSONString);
    return new Apt(
      aptObj.city,
      aptObj.stName,
      aptObj.stNumber,
      aptObj.areaSize,
      aptObj.hasAC,
      aptObj.yearBuilt,
      aptObj.rentPrice,
      aptObj.dateAvailable
    );
  }
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

// Functions

function sortTableBy() {
  const sortBy = document.getElementById("sortBy");
  const sortOption = sortBy.value;

  if (sortOption === "price+") {
    apts.sort((a, b) => a.rentPrice - b.rentPrice);
  } else if (sortOption === "price-") {
    apts.sort((a, b) => b.rentPrice - a.rentPrice);
  } else if (sortOption === "areaSize") {
    apts.sort((a, b) => a.areaSize - b.areaSize);
  } else {
    apts.sort((a, b) => {
      if (a.city < b.city) return -1;
      else if (a.city > b.city) return 1;
      else return 0;
    });
  }
}

// Apartment instance
const apt1 = new Apt(
  "Vancouver",
  "Kootenay St",
  444,
  200,
  true,
  2023,
  2200,
  "2024-11-07"
);
const apt2 = new Apt(
  "Calgary",
  "Poopy Rd",
  123,
  420,
  false,
  2010,
  2000,
  "2024-07-07"
);

apts.push(apt1, apt2);
console.log(apts);

console.log(apt1["city"]);

// Display all flats table
const allFlatsTable = document.getElementById("allFlatsTable");
apts.forEach((apt) => {
  const row = document.createElement("tr");
  const fields = [
    "city",
    "stName",
    "stNumber",
    "areaSize",
    "hasAC",
    "yearBuilt",
    "rentPrice",
    "dateAvailable",
  ];
  fields.forEach((field) => {
    const cell = document.createElement("td");
    cell.innerHTML = apt[field] !== undefined ? apt[field] : "";
    row.appendChild(cell);
  });
  allFlatsTable.appendChild(row);
});
