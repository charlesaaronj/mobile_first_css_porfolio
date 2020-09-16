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

const htmlOver = document.querySelector(".html-over")
const htmlTuts = document.querySelector(".html-tuts")
const htmlPort = document.querySelector(".html-port")
const htmltutsCont = document.querySelector('.html-tuts-cont')
const htmlportCont = document.querySelector('.html-port-cont')
const htmloverCont = document.querySelector('.html-over-cont')

htmlTuts.addEventListener('click', () => {
    htmltutsCont.classList.remove('is-hidden');
    htmloverCont.classList.add('is-hidden');
    htmlportCont.classList.add('is-hidden');
    htmlOver.classList.remove('is-active');
    htmlPort.classList.remove('is-active');
    event.currentTarget.classList.add('is-active');

});

htmlPort.addEventListener('click', () => {
    htmlportCont.classList.remove('is-hidden');
    htmltutsCont.classList.add('is-hidden');
    htmloverCont.classList.add('is-hidden');
    htmlOver.classList.remove('is-active');
    htmlTuts.classList.remove('is-active');
    event.currentTarget.classList.add('is-active');
});

htmlOver.addEventListener('click', () => {
    htmloverCont.classList.remove('is-hidden');
    htmlportCont.classList.add('is-hidden');
    htmltutsCont.classList.add('is-hidden');
    htmlPort.classList.remove('is-active');
    htmlTuts.classList.remove('is-active');
    event.currentTarget.classList.add('is-active');
});

const cssOver = document.querySelector(".css-over")
const cssTuts = document.querySelector(".css-tuts")
const cssPort = document.querySelector(".css-port")
const csstutsCont = document.querySelector('.css-tuts-cont')
const cssportCont = document.querySelector('.css-port-cont')
const cssoverCont = document.querySelector('.css-over-cont')

