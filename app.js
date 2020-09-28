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
    const hideField = document.querySelectorAll(".field");
    const reach = document.querySelector('.reach');
    const sent = document.querySelector('.sent');


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

  //clear contact form

  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
  console.log('you clicked me');
  document.getElementById("my-form").reset();
  });



// window.onclick = (event) => {
//   let eventar = event.target;
//   let myClass = this.className;
//   console.log(eventar, myClass)
//   }


const close = document.querySelectorAll('.modal-background');
const buttonClose = document.querySelectorAll('.delete');
const modal = document.querySelectorAll('.modal');
const noScroll = document.querySelector('html');

for(var i = 0; i<close.length; i++) {
  close[i].onclick = function() {
for (i = 0; i < modal.length; ++i) {
  modal[i].classList.remove('is-active');
}
noScroll.classList.remove('is-clipped');
  }
};

for(var i = 0; i<buttonClose.length; i++) {
  buttonClose[i].onclick = function() {
  for (i = 0; i < modal.length; ++i) {
    modal[i].classList.remove('is-active');
  }
  noScroll.classList.remove('is-clipped');
  }
};

function spm() {
  document.querySelector('.spm').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function med() {
  document.querySelector('.med').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function cw() {
  document.querySelector('.cw').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function imprivata() {
  document.querySelector('.imprivata').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function illumiCare() {
  document.querySelector('.illumiCare').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function cipherhealth() {
  document.querySelector('.cipherhealth').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function list() {
  document.querySelector('.full').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}
function html() {
  document.querySelector('.html').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}

function css() {
  document.querySelector('.css').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}

function js() {
  document.querySelector('.js').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}

function react() {
  document.querySelector('.react').classList.add('is-active');
  noScroll.classList.add('is-clipped');
}