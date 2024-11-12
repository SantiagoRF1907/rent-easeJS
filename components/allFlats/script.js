// All Flats Page
document.addEventListener("DOMContentLoaded", () => {
  displayFlatsTable();
});

function displayFlatsTable() {
  // Get table element
  const allFlatsTable = document.getElementById("allFlatsTable");

  // Clear table
  const flatRows = document.querySelectorAll(".flatRow");
  flatRows.forEach((flatRow) => flatRow.remove());

  // Add a row for each flat in flats array
  flats = JSON.parse(localStorage.getItem("flats"));
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
      "favourite",
    ];

    // Add a cell for each row field
    fields.forEach((field) => {
      // Add favourite toggle button
      if (field === "favourites") {
        const cell = document.createElement("td");
        const favouriteToggle = document.createElement("button");
        const whiteHeart = "\u2661";
        const blackHeart = "\u2661";
        favouriteToggle.id = `flat${flat.id}Toggle`;
        favouriteToggle.type = "checkbox";
        favouriteToggle.className = "favouriteToggle";
        favouriteToggle.innerText = whiteHeart;
        cell.appendChild(favouriteToggle);
        row.appendChild(cell);
      } else {
        const cell = document.createElement("td");
        cell.innerHTML = flat[field];
        row.appendChild(cell);
      }
    });

    allFlatsTable.appendChild(row);
  });
}

// Handle sort button
function sortTableBy() {
  const sortSelect = document.getElementById("sortBy");
  const sortOption = sortSelect.value;
  const flats = JSON.parse(localStorage.getItem("flats"));

  console.log(sortOption);
  console.log(flats);

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

  localStorage.setItem("flats", JSON.stringify(flats));

  displayFlatsTable();
}

// Handle filter select
function applyFilters() {
  filters = [];
  const flats = JSON.parse(localStorage.getItem("flats"));
  const city = document.getElementById("city").value;
  const priceRange = document.getElementById("priceRange").value;
  const areaSizeRange = document.getElementById("areaSizeRange").value;
  filters.push(city, priceRange, areaSizeRange);

  filters.forEach((filter) => {
    if (filter === "default") {
      filters.pop(filter);
      return filters;
    }
  });
}

// Poopoo caca
