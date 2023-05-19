

let counter = 1; 
setInterval(()=>{
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if(counter > 3){
        counter = 1;
    }
},5000);

// const arrowLeft = document.querySelector('.arrow-left');
// const arrowRight = document.querySelector('.arrow-right');


// arrowLeft.addEventListener('click', () => {
//     document.getElementById('radio' + counter).checked = true;
//     counter --;
//     if(counter < 1){
//         counter = 3;
//     }
    
// });


// arrowRight.addEventListener('click', () => {
//     document.getElementById('radio' + counter).checked = true;
//     counter ++;
//     if(counter > 3){
//         counter = 1;
//     }
// });