// Totaal verkochte modellen
let totalSold = 0
for (let i = 0; i < inventory.length; i++) {
    totalSold = totalSold + inventory[i].sold;
}
console.log(totalSold);

const amount = document.getElementById("Total-sold");
console.log(amount);
amount.textContent = totalSold;
//---------------------------------------------------------------------------------------

// Totaal ingekocht
let totalBought = 0
for (let i = 0; i < inventory.length; i++) {
    totalBought = totalBought + inventory[i].originalStock;
}
console.log(totalBought);

const bought = document.getElementById("Total-bought");
console.log(bought);
bought.textContent = totalBought;
//---------------------------------------------------------------------------------------

const toSell = document.getElementById("To-sell");
toSell.textContent = (totalBought - totalSold);
