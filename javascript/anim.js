let body = document.querySelector('body');
let kbrd = document.querySelector('.js-kb');
let cursor = document.querySelector('#cursor');
let sidebar = document.querySelector('.js-sidebar');
let ltrEChckBox = document.querySelector('.js-ltr-emmtr');
let ltrEmmiter = true;
ltrEChckBox.addEventListener('change', ()=>{
    ltrEmmiter = ltrEChckBox.checked ? true : false;
}) 
body.addEventListener('mousemove', (e)=>{
    if(ltrEmmiter){
        animate(e);
    };
});

function animate (e){
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';

   let el = document.createElement('div');
   el.className = 'el';
   body.prepend(el);
    
   el.innerHTML = randomLtr();
   //move elements randomly across x and y axis
   el.style.left = cursor.getBoundingClientRect().x + 'px';
   el.style.top = cursor.getBoundingClientRect().y + 'px';
   setTimeout(function(){
       let text = document.querySelectorAll('.el')[0]; 
       let directionX = Math.random() < .5 ? -1 : 1;
       let directionY = Math.random() < .5 ? -1 : 1;
       text.style.left = parseInt(text.style.left) - (directionX 
           * (Math.random()*250)) + 'px';
       text.style.top = parseInt(text.style.top) - (directionY
           * (Math.random()*200)) + 'px';
       setTimeout(()=>{
           el.remove();
       },1000)
       },3);
};

function randomLtr(){
    let text = 'abcdefghijklmnopqrstuvwxyz'.split("");
    let ltr = text[Math.floor(Math.random()*text.length)];
    return ltr;
};

