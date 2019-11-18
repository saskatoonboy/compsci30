// Mine Sweeper
// Eric James
// Nov. Fri. 15th 2019
//
// Classic minesweeper game
//
// Extra for Experts:
// - I used classes

let cities = [];
let cityIndex = [];

let blueCities = ["Paris",
                  "Atlanta",
                  "Chicago",
                  "New York",
                  "St. Petersburg",
                  "San Francisco",
                  "Milan",
                  "London",
                  "Toronto",
                  "Washington",
                  "Essen",
                  "Madrid"]; // 0

let redCities = ["Seoul",
                 "Sydney",
                 "Osaka",
                 "Bangkok",
                 "Shanghai",
                 "Manila",
                 "Hong Kong",
                 "Beijing",
                 "Ho Chi Minh City",
                 "Taipei",
                 "Jakarta",
                 "Tokyo"]; // 1

let yellowCities = ["Buenos Aires",
                    "Johannesburg",
                    "Khartoum",
                    "Sao Paulo",
                    "Miami",
                    "Kinshasa",
                    "Bogota",
                    "Los Angeles",
                    "Lima",
                    "Mexico City",
                    "Santiago",
                    "Lagos"]; // 2

let blackCities = ["Chennai", 
                   "Cairo", 
                   "Riyadh", 
                   "Algiers", 
                   "Tehran", 
                   "Karachi", 
                   "Kolkata", 
                   "Mumbai", 
                   "Delhi", 
                   "Istanbul", 
                   "Moscow", 
                   "Baghdad"]; // 3

let sel, checkbox, checkbox2, checkbox3, button;
let epidemic = false;
let fromDeck = false;
let infecting = false;
let deck = [];
let hazards = [];
let discard = [];
let dangers = [];

function setup() {
  createCanvas(100, 100)
  let cityNames = [];
  sel = createSelect();
  deck.push([]);
  for (city of blueCities) {
    cityNames.push(city);
    new City(city, 0);
  }
  for (city of redCities) {
    cityNames.push(city);
    new City(city, 1);
  }
  for (city of yellowCities) {
    cityNames.push(city);
    new City(city, 2);
  }
  for (city of blackCities) {
    cityNames.push(city);
    new City(city, 3);
  }

  cityNames.sort();

  sel.option("-----");
  for (name of cityNames) {
    sel.option(name);
  }

  sel.changed(selectedEvent);

  checkbox = createCheckbox("Epedemic");
  checkbox.changed(checkedEvent);

  checkbox2 = createCheckbox("From Deck");
  checkbox2.changed(checkedEvent2);
  
  checkbox3 = createCheckbox("Infect");
  checkbox3.changed(checkedEvent3);

  button = createButton("Reset");
  button.mousePressed(buttonClicked);

}

function draw() {
  background(255);
}

function buttonClicked() {
  deck.push(discard);
  discard = [];
  for (hazard of hazards) {
    dangers.push(hazard);
  }
  hazards = [];
}

function checkedEvent() {
  epidemic = checkbox.checked();
}

function checkedEvent2() {
  fromDeck = checkbox2.checked();
}

function checkedEvent3() {
  infecting = checkbox3.checked();
}

function selectedEvent() {
  const item = sel.value();
  let city = getCity(item);
  if (infecting) {
    if (fromDeck) {
      let layer = getDeckLayer();
      layer.splice(layer.indexOf(city));
      if (layer.length === 0) {
        deck.pop();
      }
      discard.push(city);
      if (epidemic) {
        city.sickness[city.color] = 3;
      } else {
        city.sickness[city.color]++;
      }
      if (city.sickness[city.color] === 3) {
        hazards.push(city);
      }
  
    } else {
      city.sickness[city.color]++;
      if (city.sickness[city.color] === 3) {
        hazards.push(city);
      }
    }
  } else {
    if (city.sickness[city.color] === 3) {
      if (hazards.indexOf(city) > -1) {
        hazards.slice(hazards.indexOf(city));
      } else {
        danger.slice(danger.indexOf(city));
      }
    }
    city.sickness[city.color]--;
  }
  print("Discard " + discard.length);
  print("Hazards: ");
  for (hazard of hazards) {
    print(hazard.name);
  }
  print("Dangers: " + (dangers.length/getDeckLayer().length));
  for (danger of dangers) {
    print(danger.name);
  }
}

function getDeckLayer() {
  return deck[deck.length-1];
}

function getCity(name) {
  return cities[cityIndex.indexOf(name)];
}

class City {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.attachedCities = [];
    this.sickness = [0, 0, 0, 0];
    cityIndex.push(name);
    cities.push(this);
    deck[0].push(this);
  }

  attachCity(city) {
    this.attachedCities.push(city);
  }
}
