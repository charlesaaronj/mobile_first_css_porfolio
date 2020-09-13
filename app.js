const noScroll = document.querySelector('html');

const buttonOpen1 = document.getElementById('open-1');
buttonOpen1.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-1')
content.classList.add('is-active');
noScroll.classList.add('is-clipped');
console.log(content);
});

const buttonClose1 = document.getElementById('close-1');
buttonClose1.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-1')
content.classList.remove('is-active');
noScroll.classList.remove('is-clipped');
console.log(content); 
});

const buttonOpen2 = document.getElementById('open-2');
buttonOpen2.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-2')
content.classList.add('is-active');
noScroll.classList.add('is-clipped');
console.log(content);
});

const buttonClose2 = document.getElementById('close-2');
buttonClose2.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-2')
content.classList.remove('is-active');
noScroll.classList.remove('is-clipped');
console.log(content); 
});
    
const buttonOpen3 = document.getElementById('open-3');
buttonOpen3.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-3')
content.classList.add('is-active');
noScroll.classList.add('is-clipped');
console.log(content);
});

const buttonClose3 = document.getElementById('close-3');
buttonClose3.addEventListener('click', () => {
console.log('you clicked me');
const content = document.getElementById('modal-3')
content.classList.remove('is-active');
noScroll.classList.remove('is-clipped');
console.log(content); 
}); 

var accordions = bulmaAccordion.attach(); // accordions now contains an array of all Accordion instances