// const account  = {
//     name: 'Flindy',
//     expenses: []
// }

// const addExpenses = function(desc, amount){
//     account.expenses.push({
//         Description: desc,
//         Amount: amount
//     });
// }

// let getAccountSummary = function(){
//     let total = 0;
//     account.expenses.forEach(function(expenses){
//         total= total + expenses.Amount
//     });
//     console.log(`Total Pengeluaran ${account.name} adalah Rp.${total}`);
// }

// addExpenses('Makan', 15000);
// addExpenses('Transportasi', 30000);
// addExpenses('Token Listrik', 40000);
// getAccountSummary();


const browser = "firefox";

switch(browser) {
    case "edge" :
        console.log("browser anda tidak mendukung")
        break;
    case "chrome" :
    case "firefox" :
    case "safari" :
        console.log("browser anda mendukung app ini")
        break;
    default : 
        console.log("Semoga")
}