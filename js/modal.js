// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector('.modalButton');
//alert(btn.textContent);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// // submit form
// const contactForm = document.querySelector('.contactForm')
// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let name = document.querySelector('.name');
//     let email = document.querySelector('.email');
//     let phone = document.querySelector('.phone');
//     let text = document.querySelector('.text');

//     console.log(
//         `This form has a username of ${name.value} and email of ${email.value}`
//       );
  
//     // handle submit
//   });


