let prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dots = document.getElementsByClassName('dot'),
imgs = document.getElementsByClassName('carousel-img'),
caps = document.getElementsByClassName('carousel-caption');

let imgTotal = imgs.length;
let imgPosition = 0;

function updateImg() {
 // imags
for(let img of imgs) {
  img.classList.remove('visible');
  img.classList.add('hidden');
}
imgs[imgPosition].classList.remove('hidden');

// dots
for (let dot of dots) {
 dot.className = dot.className.replace('active', '');
}
dots[imgPosition].classList.add('active');

//display slide
for(let cap of caps){
 cap.classList.remove('visible');
 cap.classList.add('hidden');
}
caps[imgPosition].classList.remove('hidden');

}

function nextImg() {
 imgPosition === imgTotal - 1 ? imgPosition = 0 : imgPosition++;
updateImg();
}

function prevImg() {
 imgPosition === 0 ? imgPosition = imgTotal - 1 : imgPosition--;
 updateImg();
}

prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);


let prev1 = document.querySelector('.prev1'),
next1 = document.querySelector('.next1'),
dots1 = document.getElementsByClassName('dot1'),
imgs1 = document.getElementsByClassName('carousel-img1'),
trakerImgs = document.querySelector('.slider-list'),
container = document.querySelector('.slider-container');

let imgTotal1 = imgs1.length,
sliderToShow = 1,
sliderToScroll = 1,
Imgposition1 = 0;
let sliderWidth = container.clientWidth/sliderToShow;


prev1.addEventListener('click', (event) => {
Imgposition1 += sliderWidth;
setPosition()
checkBtns()
upd()
})

next1.addEventListener('click', (event) =>{
Imgposition1 -= sliderWidth
setPosition()
checkBtns()
upd()
})

const setPosition = function() {
trakerImgs.style.transform = `translateX(${Imgposition1}px)`
}


const checkBtns = function() {

  prev1.disabled = Imgposition1 === 0 
  next1.disabled = Imgposition1 <= -(imgTotal1 * sliderWidth) + sliderWidth
    
}


let upd = function(){

for (let dot1 of dots1) {
[...dots1].forEach((item),i => {

})
}

}

