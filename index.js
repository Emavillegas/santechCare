

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



// log in

const login = document.querySelector('.log-in');
const formPrincipal = document.querySelector('.container-form-principal');
console.log(login);

login.addEventListener('click',() => {
    formPrincipal.style.display = 'block';
});


const closeImage = document.querySelector('.img-close');
console.log(closeImage);

closeImage.addEventListener('click', ()=>{
    formPrincipal.style.display = 'none';
})


// number counter
const backgroundColor = document.querySelector('#background-number');
const numberCounter = document.querySelector('#number-data');
let cantidad = 0;

let tiempo = setInterval(()=>{
    cantidad = cantidad + 1;
    backgroundColor.style.height = `${cantidad}%`;
    numberCounter.textContent = `+ ${cantidad}`;


    if(cantidad === 300)
    {
        clearInterval(tiempo);
    }
 

},15);