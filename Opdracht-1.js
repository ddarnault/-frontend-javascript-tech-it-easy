// Tv namen
const tvName = inventory.map((tv) => {
    return tv.name;
});
console.log(tvName);
//---------------------------------------------------------------------------------------

// Uitverkochte modellen
const outOfStock = inventory.filter((sold) => {
    return sold.originalStock === sold.sold;

});

console.log(outOfStock);
//---------------------------------------------------------------------------------------

// Tv's met Ambilight
const ambiLight = inventory.filter((ambi) => {
    return ambi.options.ambiLight === true
});
console.log(ambiLight)
//---------------------------------------------------------------------------------------

// Tv prijzen; laag naar hoog
const sortedPrices = inventory.sort((a, b, c) => {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    } else {
        return 0;
    }
});

console.log(sortedPrices);
//---------------------------------------------------------------------------------------