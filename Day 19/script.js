// mouse events

let res = document.getElementById('container')

// 1  mouseenter
res.addEventListener('mouseenter', function() {  // mouse is seen in div then background color white 
    container.style.backgroundColor = 'white';
    
});

//2  mouseleave


res.addEventListener('mouseleave', function() {
    container.style.backgroundColor = 'red';
});

// 3  mousemove

res.addEventListener('mousemove', function(event) {
    container.style.backgroundColor = 'blue';
});

// Ex


let res2 = document.getElementById('box')
let box = document.getElementById('child');

res2.addEventListener('mousemove', function(e) {
    box.style.top = `${e.clientY/2}px`
    box.style.left = `${e.clientX/5}px`;
});


