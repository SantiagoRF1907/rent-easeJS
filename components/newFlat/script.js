// Set local storage
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

function addFav(favFlat) {
  let favouriteFlats = JSON.parse(localStorage.getItem("favouriteFlats"));
  favouriteFlats.push(favFlat);
  localStorage.setItem("favouriteFlats", JSON.stringify(favouriteFlats));
  return favouriteFlats;
}

// Flat class
class Flat {
  constructor(
    city,
    stName,
    stNumber,
    areaSize,
    hasAC,
    yearBuilt,
    rentPrice,
    dateAvailable,
    isFavourite
  ) {
    this.city = city;
    this.stName = stName;
    this.stNumber = stNumber;
    this.areaSize = areaSize;
    this.hasAC = hasAC;
    this.yearBuilt = yearBuilt;
    this.rentPrice = rentPrice;
    this.dateAvailable = dateAvailable;
    this.isFavourite = isFavourite;
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
  const isFavourite = true;

  // Create new Flat instance & Save new flat in local storage
  newFlatJSON = `{"city":"${city}","stName":"${stName}","stNumber":"${stNumber}",
  "areaSize":"${areaSize}","hasAC":"${hasAC}","yearBuilt":"${yearBuilt}","rentPrice":"${rentPrice}","dateAvailable":"${dateAvailable}","isFavourite":"${isFavourite}"}`;
  newFlat = Flat.toObj(newFlatJSON);
  flats = addFlat(newFlat);

  // Add newFlat to favouriteFlats
  favouriteFlats = addFav(newFlat);

  // Debugging
  console.log("Flats array: ", flats);
  console.log("Favourite Flats array: ", favouriteFlats);
  console.log("New Flat instance: ", newFlat);

  alert("New Flat Post Succesful!");
}

// Poopoo caca
