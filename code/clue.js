// CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 50,
  image: "assets/green.png",
  occupation: "Entrepreneur",
}

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "purple",
  description: "He is very smart",
  age: 40,
  image: "assets/plum.png",
  occupation: "Professor",
}

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "red",
  description: "She is very hard to read",
  age: 35,
  image: "assets/scarlet.png",
  occupation: "Actress",
}

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "Her voice can break glass",
  age: 45,
  image: "assets/peacock.png",
  occupation: "Opera singer",
}

const mrMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He has a bad temper",
  age: 70,
  image: "assets/mustard.png",
  occupation: "Colonel",
}

const mrsWhite = {
  firstName: "Mrs",
  lastName: "White",
  color: "white",
  description: "She knows everything",
  age: 60,
  image: "assets/white.png",
  occupation: "House Maid",
}

// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS THE THE WEAPONS IF YOU LIKE.

const rope = {
  name: "Rope",
  weight: 5,
}

const knife = {
  name: "Knife",
  weight: 3,
}

const candlestick = {
  name: "Candlestick",
  weight: 5,
}

const dumbbell = {
  name: "Dumbbell",
  weight: 10,
}

const poison = {
  name: "Poison",
  weight: 1,
}

const axe = {
  name: "Axe",
  weight: 8,
}

const bat = {
  name: "Bat",
  weight: 7,
}

const trophy = {
  name: "Trophy",
  weight: 5,
}

const pistol = {
  name: "Pistol",
  weight: 2,
}

// THE ROOMS ONLY HAS A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS.

//These are objects, not strings therefore without " "

const suspects = [
  mrGreen,
  profPlum,
  missScarlet,
  mrsPeacock,
  mrMustard,
  mrsWhite,
];

//These are objects, not strings therfore without ""

const weapons = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol,
];

//These are strings not objects, therefore " "

const rooms = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio",
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FOR THE ARRAY THAT YOU PASS IN TO THE FUNCTION.

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

const mystery = {
};

// FINISH THIS FUNCTION TO SHOW ALL INFORMATION ABOUT THE KILLER.
// This function will be invoked when you click on the killer card.

const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects)

  const theKiller = document.getElementById('killer')
  theKiller.style.background = mystery.killer.color

  const theKillerName = document.getElementById('killerName')
  theKillerName.innerHTML = mystery.killer.firstName + " " + mystery.killer.lastName

  const theKillerOccupation = document.getElementById('killerOccupation')
  theKillerOccupation.innerHTML = mystery.killer.occupation

  const theKillerAge = document.getElementById('killerAge')
  theKillerAge.innerHTML = mystery.killer.age

  const theKillerImage = document.getElementById('killerImage')
  theKillerImage.src = mystery.killer.image

  const theKillerDescription = document.getElementById('killerDescription')
  theKillerDescription.innerHTML = mystery.killer.description
}


const pickWeapon = () => {
  // This will randomly select a weapon. And add that to the mystery object.
  mystery.weapon = randomSelector(weapons)

  const theWeaponName = document.getElementById('weaponName')
  const theWeaponWeight = document.getElementById('weaponWeight')

  theWeaponName.innerHTML = mystery.weapon.name
  theWeaponWeight.innerHTML = mystery.weapon.weight
}

const pickRoom = () => {
  mystery.room = randomSelector(rooms)
  const theRoomName = document.getElementById('roomName')
  theRoomName.innerHTML = mystery.room
}

// CREATE A FUNCTION revealMystery that will be invoked when you click that button.It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'

const revealMystery = () => {
  const theCrime = document.getElementById("mystery");
  theCrime.innerHTML = `The murder was committed by ${mystery.killer.firstName} ${mystery.killer.lastName}, in the ${mystery.room} with a ${mystery.weapon.name}.`;
}