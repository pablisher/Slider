let prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dots = document.querySelectorAll('.dot'),
Imgs = document.querySelectorAll('.carousel-img'),
caps = document.querySelectorAll('.carousel-caption');

let imgTotal = Imgs.length;
let Imgposition = 0


function updateImg(){
for(let img of Imgs){
    img.classList.remove('visible')
    img.classList.add('hidden')
}
Imgs[Imgposition].classList.remove('hidden')
};


for (let dot of dots) {
    dot.className = dot.className.replace('active','')
}
dots[Imgposition].classList.add('active');


for (let cap of caps ) {
   cap.classList.remove('visible')
   cap.classList.add('hidden')
}
caps[Imgposition].classList.remove('hidden');


function nextImg(){
if(Imgposition === imgTotal - 1 ){
    Imgposition = 0
}else{
Imgposition++
}
updateImg()
console.log('Imgposition:', Imgposition);
};


function prevImg() {
    if(Imgposition === 0){
      Imgposition = imgTotal -1  
    }else {
        Imgposition--
      }
    updateImg()
    console.log('Imgposition:', Imgposition);
};



prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);



let prev1 = document.querySelector('.prev1'),
next1 = document.querySelector('.next1'),
dots1 = document.getElementsByClassName('dot1'),
trakerImgs = document.querySelector('.slider-list'),
Imgs1 = document.getElementsByClassName('carousel-img1'),
container = document.querySelector('.carousel-container');

let imgTotal1 = Imgs1.length,
sliderToShow = 1,
sliderToScroll = 1,
Imgposition1 = 0;

let sliderWidth = container.clientWidth/sliderToShow;

prev1.addEventListener('click', (event) => {
    Imgposition1 -= sliderWidth;
    setPosition()
})

next1.addEventListener('click', (event) =>{
Imgposition1 += sliderWidth
setPosition()
})

const setPosition = function() {
trakerImgs.style.transform = `translateX(${Imgposition1}px)`
}


const checkBtns = function() {
    prev1 = Imgs1
    setPosition()
}
