// Set local storage
function setItem(key) {
  localStorage.setItem(key, JSON.stringify([]));
  return [];
}
let users = setItem("users");
let flats = setItem("flats");

function addFlat(flat) {
  let flats = JSON.parse(localStorage.getItem("flats"));
  flats.push(flat);
  localStorage.setItem("flats", JSON.stringify(flats));
  return flats;
}

function removeFlat(flat) {
  let flats = JSON.parse(localStorage.getItem("flats"));
  flats = flats.filter((f) => f != flat);
  localStorage.setItem("flats", JSON.stringify(flats));
  return flats;
}

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

// All Flats Page
// Display all flats table
function displayAllFlatsTable() {
  // Get table element
  const allFlatsTable = document.getElementById("allFlatsTable");
  // Clear table
  const flatRows = document.querySelectorAll(".flatRow");
  flatRows.forEach((flatRow) => flatRow.remove());

  // Add a row for each flat in flats array
  flats.forEach((f) => {
    flat = Flat.toObj(f);
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
// displayAllFlatsTable();

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

// New Flat Page

// Define newFlatForm & Prevent form from submitting automatically
const newFlatForm = document.getElementById("newFlatForm");
newFlatForm.addEventListener("submit", (e) => e.preventDefault());

// Post Flat
function postFlat() {
  // Obtain form input
  const city = document.getElementById("citySelect").value;
  const stName = document.getElementById("stName").value;
  const stNumber = document.getElementById("stNumber").value;
  const areaSize = document.getElementById("areaSize").value;
  const hasAC = document.getElementById("hasACSelect").value;
  const yearBuilt = document.getElementById("yearBuilt").value;
  const rentPrice = document.getElementById("rentPrice").value;
  const dateAvailable = document.getElementById("dateAvailable").value;

  // Create new Flat instance in JSONString format & Save new flat in local storage
  newFlatJSON = `{"city":"${city}","stName":"${stName}","stNumber":"${stNumber}","areaSize":"${areaSize}","hasAC":"${hasAC}","yearBuilt":"${yearBuilt}","rentPrice":"${rentPrice}","dateAvailable":"${dateAvailable}",}`;
  flats = addFlat(newFlatJSON);

  alert("New Flat Post Succesful!");
}

// Poopoo caca

console.log(flats);
