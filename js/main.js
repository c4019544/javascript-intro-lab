console.info("Hello from the file!");
document.getElementById('myHeading').innerHTML = 'The website'; // change the header

//only the first item // pick up from the class called .currentPage{} in the css file
document.querySelector('nav ul li').setAttribute('class', 'currentPage');

let current = document.querySelectorAll('nav ul li'); //not work yet

for (let i = 0; i < current.length; i++)
{
    current[i].addEventListener('click', function(){
        current[i].setAttribute('class', 'currentPage'); 
    })
}


// links to a new link
// document.querySelector('nav ul li a').setAttribute('href', 'https://www.google.co.uk'); 


//all items with class called colPicker
let colourButtons = document.querySelectorAll('.colPicker');
console.dir(colourButtons)
for (let i = 0; i < colourButtons.length; i++)
{
    //colourButtons[i].style.backgroundColor = "lightBlue"; // each item background is changed
    colourButtons[i].addEventListener('click', changeColour)
}

function changeColour(ev)
{
    console.info(ev.target.classList[0]);
    let colourClass = ev.target.classList[0] + "Back";
    document.body.setAttribute('class', colourClass);
}


// add an event to the button - specified using function
document.getElementById('myTestBtn').addEventListener('click', function(){
    console.info('hi')
})


// arrays - image rotator
let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
];

let imageRotator = document.getElementById('myImages');
let imageCounter = 0;
function chgImage(){
    imageCounter++;
    if (imageCounter === imageAr.length){
        imageCounter = 0;
    }
    imageRotator.setAttribute("src", imageAr[imageCounter]);
    
    console.info(imageCounter);
}
chgImage();
setInterval(chgImage, 1000); //1000 milliseconds every 1 secs



// colour picker
// let redBtn = document.querySelector('.red');
// redBtn.addEventListener('mouseover', function(){
//     document.body.setAttribute('class', 'redBack');
// })

// let greenBtn = document.querySelector('.green');
// greenBtn.addEventListener('mouseover', function(){
//     document.body.setAttribute('class', 'greenBack');
// })

// let blueBtn = document.querySelector('.blue');
// blueBtn.addEventListener('mouseover', function(){
//     document.body.setAttribute('class', 'blueBack');
// })

// let resetBtn = document.querySelector('.reset');
// resetBtn.addEventListener('mouseover', function(){
//     document.body.setAttribute('class', 'colPicker'); //can do document.body.removeAttribute('class');
// })

