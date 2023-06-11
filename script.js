// const cars = [
//     {name:"Car A", price: 100000},
//     {name:"Car B", price: 200000},
//     {name:"Car C", price: 300000},
//     {name:"Car D", price: 400000},
//     {name:"Car E", price: 500000},
//     {name:"Car F", price: 600000},
// ];
// function serachCar(){
//     var priceInput = parseInt(document.getElementById("price").value);
//     var price = parseInt(priceInput.value);
//     var resultDiv = document.getElementById("result");
//     resulrDiv.innerHTML = "";

//     const matchingCars = cars.filter(car => car.price <=price);
//     if(matchCars.length > 0){
//         matchingCars.forEach(car => {
//             const carDiv = document.createElement("div");
//             carDiv.textContent = `${car.name} - $${car.price}`;
//             resultDiv.appendChild(carDiv);
//         });
//     }
//     else{
//         const noResultDiv = document.createElement("div");
//         noResultDiv.textContent = "No cars found within the given price range.";
//         resultDiv.appendChild(noResultdiv);
//     }

// }


function searchCar() {
    var carPrice = document.getElementById("price").value;
    var imageContainer = document.getElementById("result");

    // Clear the image container
    imageContainer.innerHTML = "";

    if (carPrice >= 0 && carPrice <= 10000) {
        var carImage = document.createElement("img");
        carImage.src = "../image/alto.avif";
        carImage.id = "carImage";
        imageContainer.appendChild(carImage);
    } else if (carPrice > 10000 && carPrice <= 50000) {
        var carImage = document.createElement("img");
        carImage.src = "../image/i20.webp";
        carImage.id = "carImage";
        imageContainer.appendChild(carImage);
    } else if (carPrice > 50000) {
        var carImage = document.createElement("img");
        carImage.src = "../image/verna.webp";
        carImage.id = "carImage";
        imageContainer.appendChild(carImage);
    } else {
        var errorText = document.createElement("p");
        errorText.innerText = "Invalid price. Please enter a valid price.";
        imageContainer.appendChild(errorText);
    }
}