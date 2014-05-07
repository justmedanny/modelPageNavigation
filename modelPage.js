/*jslint browser:true */

// m is the variable that has a value equal to the amount of pictures that model has. for example, if model "John Doe" has 32 pictures in his gallery
// then m is equal to 32
var m = +document.getElementById("maxPictures").innerHTML,

// the current picture will always start off as 1 because when you load or refresh the page you see the first picture.
    i = 1;
document.getElementById("currentPicture").innerHTML = i;


// when the user clicks the back button they will navigate backward until they reach the first picture.
document.getElementById("backButton").addEventListener("click", function () {

    var modelName = document.getElementById("modelName").innerHTML.replace(/ /g, '').toLowerCase(),
        modelImageSource = document.getElementById("modelPicture");
    i = i - 1;
    if (i < 1) {
        i = 1;
    }
    modelImageSource.src = modelName + i + ".jpg";
    document.getElementById("currentPicture").innerHTML = i;
}, false);

// when the user clicks the next button, they will navigate forward and when they reach the last picture, clicking next will take them to the first picture.
document.getElementById("nextButton").addEventListener("click", function () {

    var modelName = document.getElementById("modelName").innerHTML.replace(/ /g, '').toLowerCase(),
        modelImageSource = document.getElementById("modelPicture");
    i = i + 1;
    if (i > m) {
        i = 1;
    }
    modelImageSource.src = modelName + i + ".jpg";
    document.getElementById("currentPicture").innerHTML = i;
}, false);
