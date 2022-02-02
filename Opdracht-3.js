// Tv merken
const brandList = document.getElementById("Tv-brands")

/* const tvBrands = inventory.map((brand) => {
    const newList = document.createElement("li")
    newList.textContent = brand.brand
    return brandList.appendChild(newList);
});

console.log(brandList);
*/
function tvBrandList(array) {
    const tvBrands = array.map((brand) => {
        const newList = document.createElement("li")
        newList.textContent = brand.brand
        return brandList.appendChild(newList);

    })
}
    tvBrandList(inventory);
//---------------------------------------------------------------------------------------