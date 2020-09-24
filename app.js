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

  window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("my-form");
    const button = document.getElementById("my-form-button");
    const status = document.getElementById("my-form-status");
    const email = document.getElementById("email");
    const hideField = document.querySelectorAll(".field");
    const reach = document.querySelector('.reach');
    const sent = document.querySelector('.sent');

    form.email.addEventListener('keyup', e=> {
      if(usernamePattern.test(e.target.value)){
      form.username.setAttribute('class', 'success');;
      }else{
      form.username.setAttribute('class','error')
      }

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      hideField.forEach(myFunction);
      function myFunction(item) {
      item.classList.add('is-hidden');
      }
      reach.classList.add('is-hidden');
      sent.classList.remove('is-hidden');
      let data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  


  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  const email = document.getElementById('email').value;
 function emailValidate (address) {
  console.log(address);
 }

 emailValidate(email);
  //clear contact form

  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
  console.log('you clicked me');
  document.getElementById("my-form").reset();
  });

const noScroll = document.querySelector('html');
const backgroundClose = document.querySelector('.modal-background');

const open1 = document.querySelector('.open1');
const open2 = document.querySelector('.open2');
const open3 = document.querySelector('.open3');
const open4 = document.querySelector('.open4');
const open5 = document.querySelector('.open5');
const open6 = document.querySelector('.open6');
const open7 = document.querySelector('.open7');
const open8 = document.querySelector('.open8');
const open9 = document.querySelector('.open9');
const open10 = document.querySelector('.open10');

const cont1 = document.getElementById('modal1')
const cont2 = document.getElementById('modal2')
const cont3 = document.getElementById('modal3')
const cont4 = document.getElementById('modal4')
const cont5 = document.getElementById('modal5')
const cont6 = document.getElementById('modal6')
const cont7 = document.getElementById('modal7')
const cont8 = document.getElementById('modal8')
const cont9 = document.getElementById('modal9')
const cont10 = document.getElementById('modal10')

open1.addEventListener('click', () => {
cont1.classList.add('is-active');
noScroll.classList.add('is-clipped');
console.log(content);
});

window.onclick = function(event) {
  let eventar = event.target;
  var myClass = this.className;
  console.log(eventar, myClass)
  }

const array = ['.open1','.open2','.open3'];

const found = array.indexOf('.open3');

console.log(found);

const buttonClose1 = document.getElementById('close-1');

const content = document.getElementById('modal1')
buttonClose1.addEventListener('click', () => {
console.log('you clicked me');
content.classList.remove('is-active');
noScroll.classList.remove('is-clipped');
});

backgroundClose.addEventListener('click', () => {
  console.log('you clicked me');
  content.classList.remove('is-active');
  noScroll.classList.remove('is-clipped');
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