let cat1Name = "Milly";
let cat2Name = "Whiskers"
let catImgSrc1 = "./images/cat_pic1.jpeg";
let catImgSrc2 = "./images/cat_pic2.jpg"
let catDisplay = document.getElementsByClassName('cat-display');
let clickCounter1 = 0;
let clickCounter2 = 0;
let clickNumber1 = document.querySelector('.click-number1');
let clickNumber2 = document.querySelector('.click-number2');



// Create an image element and set the src of the element as catImage
// take the image you created and put it inside of cat display
// put event listner on cat image element with a click event

let catImage1 = document.createElement('img');
let catImage2 = document.createElement('img')

catImage1.src = catImgSrc1;
catImage2.src = catImgSrc2;

catDisplay[0].appendChild(catImage1);
catDisplay[1].appendChild(catImage2);

// click event is going to execute a fucntion that increments the click count

catImage1.addEventListener('click', function(e){
        clickCounter1++;
        clickNumber1.innerHTML = clickCounter1;    
});
catImage2.addEventListener('click', function(e){
        clickCounter2++;
        clickNumber2.innerHTML = clickCounter2;    
});

// Add a name to the cat image for each cat

document.getElementById("cat1Name").innerHTML = cat1Name;
document.getElementById("cat2Name").innerHTML = cat2Name;
