document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    console.log(navbarBurgers)

    // Check if there are any navbar burgers
    if (navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          console.log(target)
          const targetTwo = document.getElementById(target);
          console.log(targetTwo)
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          targetTwo.classList.toggle('is-active');
  
        });
      });
    }
  
  });

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