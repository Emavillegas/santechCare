

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



// giving you an example

const buttonPopUp = document.querySelector('#example');
const popUpArticle = document.querySelector('.popup1');
const buttonOk = document.querySelector('.example-ready');



console.log(buttonPopUp);

buttonPopUp.addEventListener('click',() => {
    popUpArticle.classList.remove('hidden');
})

buttonOk.addEventListener('click',() => {
    popUpArticle.classList.add('hidden');
})





