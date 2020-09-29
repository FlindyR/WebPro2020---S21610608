// Convert to ES6 Syntax

// ES5
// function yearUntilRetirement(year, firstName) {
//     var age = 28;
//     var retirement = 65 - age;
//     if(retirement > 0) {
//         console.log(firstName + " retire in " + retirement + " years.")
//     } else {
//         console.log(firstName + " is already retired.")
//     }
// }

// ES6
const yearUntilRetirement = (firstName) => {
    const age = 28
    let retirement = 65 - age
    if(retirement > 0) {
        console.log(`${firstName} retire in ${retirement} years.`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
}
yearUntilRetirement("Flindy");

const yearUntilRetirement2 = (firstName, age = 28) => {
    let retirement = 65 - age
    if(retirement > 0) {
        console.log(`${firstName} retire in ${retirement} years.`)
    } else {
        console.log(`${firstName} is already retired.`)
    }
}

yearUntilRetirement2("Flindy");
yearUntilRetirement2("Flindy", 50); 