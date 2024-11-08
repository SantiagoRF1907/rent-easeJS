// Define variables
let users = [];
let flats = [];
let cities = [];
const allFlatsTable = document.getElementById("allFlatsTable");

// Apartment class
class Flat {
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

  static toObj(flatJSONString) {
    let flatObj = JSON.parse(flatJSONString);
    return new Flat(
      flatObj.city,
      flatObj.stName,
      flatObj.stNumber,
      flatObj.areaSize,
      flatObj.hasAC,
      flatObj.yearBuilt,
      flatObj.rentPrice,
      flatObj.dateAvailable
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

// Flat instance
const flat1 = new Flat(
  "Vancouver",
  "Kootenay St",
  444,
  200,
  true,
  2023,
  2200,
  "2024-11-07"
);
const flat2 = new Flat(
  "Calgary",
  "Poopy Rd",
  123,
  420,
  false,
  2010,
  2000,
  "2024-07-07"
);
flats.push(flat1, flat2);

// Display all flats table
function displayAllFlatsTable() {
  const flatRows = document.querySelectorAll(".flatRow");
  flatRows.forEach((flatRow) => flatRow.remove());
  flats.forEach((flat) => {
    const row = document.createElement("tr");
    row.className = "flatRow";
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
      cell.innerHTML = flat[field] !== undefined ? flat[field] : "";
      row.appendChild(cell);
    });
    allFlatsTable.appendChild(row);
  });
}
displayAllFlatsTable();

// Handle sort button
function sortTableBy() {
  const sortSelect = document.getElementById("sortBy");
  const sortOption = sortSelect.value;
  console.log(sortOption);

  if (sortOption === "price+") {
    flats.sort((a, b) => a.rentPrice - b.rentPrice);
  } else if (sortOption === "price-") {
    flats.sort((a, b) => b.rentPrice - a.rentPrice);
  } else if (sortOption === "areaSize+") {
    flats.sort((a, b) => a.areaSize - b.areaSize);
  } else if (sortOption === "areaSize-") {
    flats.sort((a, b) => b.areaSize - a.areaSize);
  } else {
    flats.sort((a, b) => {
      if (a.city < b.city) return -1;
      else if (a.city > b.city) return 1;
      else return 0;
    });
  }
  displayAllFlatsTable();
}

// Handle filter select
// function filterBy() {}
