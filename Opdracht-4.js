// Tv namen
const tvNameString = (tvNameObject) => {
    return tvNameObject.brand + tvNameObject.type  + "-" + tvNameObject.name;
};
console.log(tvNameString(inventory[4]));
//---------------------------------------------------------------------------------------

// Tv Prijzen
const tvPriceString = (tvPriceObject) => {
    return "€ " + tvPriceObject.price;
};
console.log(tvPriceString(inventory[4]));
//---------------------------------------------------------------------------------------

// Tv Maten
const tvSizeString = (tvSizeObject) =>  {
    return inventory[4].availableSizes
};
console.log(tvSizeString(inventory[4].availableSizes))
//---------------------------------------------------------------------------------------