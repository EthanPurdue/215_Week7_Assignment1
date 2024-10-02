// create the petsData array to hold all pet information, including their image stored in the folder
const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        //images are in the same folder as the index and .js file so you don't path it
        // if images were in a folder inside lab folder called "images" you would do the following
        // pic: "images\\stella.png"
        pic: "animals\\stella.png"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        pic: "animals\\cody.png"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        pic: "animals\\mango.png"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        pic: "animals\\lucy.png"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        pic: "animals\\buhmie.png"
    }
];


// this is the function that will be called upon when the button is clicked.
const showInfo = () => {
    // THIS is how we will get the value of text fields. Not that different from your assignment but correct
    // notice the # this means that petNum is an ID not a class
    let petNumber = document.querySelector("#petNum").value;
    
    // the array is zero-based, so subtract 1 from input so that user input lines up with what they want
    petNumber = parseInt(petNumber) - 1;

    // get a handle to the paragraph, pretty standard 
    let selectedPetInfo = document.querySelector(".selectedPetInfo");
    
    // get the correspoding petsData object for number the user inputted
    let pet = petsData[petNumber];
    
    // set the information
    selectedPetInfo.textContent = `${pet.petName} is a ${pet.breed} and is ${pet.age} years old.`;
    let petPic = document.querySelector(".selectedPetPic");
    // set the image
    petPic.src = pet.pic;
}


// Get a handle to the petsInfo paragraph
let petsInfo = document.querySelector(".petsInfo");

// Add content by modifying the textContent property
petsInfo.textContent = `Welcome to our newest pet, 
${petsData[petsData.length - 1].petName} the 
${petsData[petsData.length - 1].breed}`;

// get a handle to display pet List 
let petsList = document.querySelector(".petsList");
// This is format to make it a procedural list
// this way if its ever updated, it will includ it
let allPetsList = `<ol>`;
petsData.forEach((pet) => {
    allPetsList += `<li> ${pet.petName} the ${pet.breed}</li>`;
});
allPetsList += `</ol>`;

petsList.innerHTML = allPetsList;