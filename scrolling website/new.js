
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain_behind = document.getElementById(' mountain_behind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountain_front = document.getElementById('mountain_front');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    stars.style.left = value*0.25 + 'px';   /* not work this properties */
    moon.style.top = value*1.05 + 'px';
    mountain_behind.style.top = value*0.05 + 'px';
    mountain_front.style.top = value*0 + 'px';
    text.style.marginRight=value*4 +'px'; 
})
