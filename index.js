// Have you created an HTML file to live serve?
// Is the HTML file connected to a JS file?
// Can you prompt the user for froyo flavors and store their input? This is just a matter of making the prompt a variable to store the users response to use it later. 
// Can you parse the user input into an array of froyo flavors? You can use .split(",") which will use the commas from the input to parse each item. This was returned to be used in the next function.

function getAllFroyoFlavors() {
    const froyoInput = prompt("Enter your froyo flavors, separate by commas as seen in the placeholder", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
    return froyoInput.split(",");
}

// Can you build an object to track which flavors you have counted so far? First I had to build an empty obj to store the counts
// How should that object be updated as you iterate through the array of flavors? You are checking to see if the flavor exists as a key in the object, if it does you increment by ++ if not, the else statement will kick in and add the flavor as a key with a value of 1.
// Are you using functions to organize your code? Yes, everything was turned into functions and tested. 
// const froyoInput = prompt("Enter your froyo flavors, separate by commas as seen in the placeholder", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
//     console.log(froyoInput.split(","));

//     const flavorCounts = {};
//     for (const flavor of flavors) {
//         if (flavorCounts[flavor]) {
//             flavorCounts[flavor]++;
//         } else {
//             flavorCounts[flavor] = 1;
//         }
//     }
//     return flavorCounts;
// Do your variables and functions have meaningful names?
// Is your code formatted?



function countAllFlavors(flavors) {
    const flavorCounts = {};
    for (const flavor of flavors) {
        if (flavorCounts[flavor]) {
            flavorCounts[flavor]++;
        } else {
            flavorCounts[flavor] = 1;
        }
    }
    return flavorCounts;
}

const flavors = getAllFroyoFlavors();
const counts = countAllFlavors(flavors);
console.log(counts);

