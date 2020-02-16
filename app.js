let cat1 = "Milly";
let cat2 = "Whiskers";

let catImgSrc1 = "./images/cat_pic1.jpeg";
let catImgSrc2 = "./images/cat_pic2.jpg"
let catDisplay = document.getElementsByClassName('cat-display');
let clickCounter = 0;
let clickNumber = document.querySelector('.click-number');


// Create an image element and set the src of the element as catImage
// take the image you created and put it inside of cat display
// put event listner on cat image element with a click event

let catImage1 = document.createElement('img');
let catImage2 = document.createElement('img')
catImage1.src = catImgSrc1;
catImage2.src = catImgSrc2;
catImage1.className = "img-thumbnail";
catImage2.className = "img-thumbnail";
catDisplay[0].appendChild(catImage1);
catDisplay[1].appendChild(catImage2);

// click event is going to execute a fucntion that increments the click count

catImage.addEventListener('click', function(e){
        clickCounter++;
        clickNumber.innerHTML = clickCounter;    
});