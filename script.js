// "use strict"

// let book = document.getElementById("book")
// let outerCircle = document.getElementById("outerCircle");
// let innerPath = document.getElementById("innerPath");
// let backProject = document.getElementById("back")
// let selectBtns = document.querySelectorAll(".select")
// let collapse = document.getElementById("collapse");
// let closeImg = document.getElementById("close");
// let openImg = document.getElementById("open");
// let nav = document.getElementById("nav")
// let radio = document.getElementById("radio")
// let dropDown = document.querySelectorAll(".drop")
// let done = document.getElementById("done")
// let exit = document.getElementById("exit")
// let selectedPledgeStart = document.querySelectorAll(".selected-pledge-start")
// let successModal = document.querySelector(".Success-modal-start")
// let selectedModal = document.querySelector(".selection-modal-start")
// let hasAppended = true;
// let form = document.querySelectorAll('.myForm')
// let radios = document.querySelectorAll(".drop")
// let inputValueOne = document.getElementById("input1")
// let inputValueTwo = document.getElementById("input2")
// let btnOne = document.getElementById("btn1")
// let btnTwo = document.getElementById("btn2")
// let validator = true
// let bookText = document.querySelector(".booked-text")


// btnOne.addEventListener("click", function (e) {
//   e.preventDefault(); 
//   let valueOne = parseInt(inputValueOne.value); 

//   if (inputValueOne.value === "" && valueOne < 25) {
//     return
//   }

//   successModal.classList.remove("none");
//   done.addEventListener("click", () => {
//     successModal.classList.add("none");
//     selectedModal.classList.add("none")
//   });
// });

// btnTwo.addEventListener("click", function (e) {
//   e.preventDefault(); 
//   let valueTwo = parseInt(inputValueTwo.value); 

//   if (inputValueTwo.value === "" && valueTwo < 75) {
//     return 
//   }

//   successModal.classList.remove("none");
//   done.addEventListener("click", () => {
//     successModal.classList.add("none");
//     selectedModal.classList.add("none")
//   });
// });


// backProject.addEventListener('click', function () {
//   selectedModal.classList.remove('none')
// })

// collapse.addEventListener("click", ()=>{
//   openImg.classList.toggle('none')
//   closeImg.classList.toggle('none')
//   nav.classList.toggle('block')
// })

// book.addEventListener('click', function () {
//   // Toggle the booked class
//   // this.classList.toggle("booked");

//   // // Append "ed" once
//   // if (hasAppended) {
//   //   book.innerHTML += "ed"; // Append "ed" to button text
//   //     hasAppended = false; // Prevent further appending
//   // }

//   this.classList.toggle("booked")

//   if(

//     this.classList.contains('booked')
//   ){
//     bookText.textContent = 'Bookmarked'
//   } else {
//     bookText.textContent = 'Bookmark'
//   }

//   // Change the colors of the SVG elements
//   changeColor();
// });

// function changeColor() {
//   // Toggle between the original color and the HSL color
//   let outerColor = outerCircle.getAttribute('fill') === '#2F2F2F' ? 'hsl(176, 50%, 47%)' : '#2F2F2F';
//   let innerColor = innerPath.getAttribute('fill') === '#B1B1B1' ? 'white' : '#B1B1B1';

//   outerCircle.setAttribute('fill', outerColor);
//   innerPath.setAttribute('fill', innerColor);
// }

// selectBtns.forEach(selectedBtn => {
//   selectedBtn.addEventListener('click', () =>{
//     successModal.classList.remove("none")
//       done.addEventListener('click', () =>{
//     successModal.classList.add("none")
//   })
//   })
// })

// exit.addEventListener('click', function () {
//   selectedModal.classList.add('none')
// })

// radio.addEventListener('change', function () {
//   successModal.classList.remove("none")
//   done.addEventListener('click', function () {
//     selectedModal.classList.add("none")
//     successModal.classList.add("none")
//   })
// })

// radios.forEach(radio => {
//   radio.addEventListener('change', () => {
//     selectedPledgeStart.forEach(pledge => {
//       if (pledge.id === radio.getAttribute('data-target')) {
//         pledge.classList.remove("none")
//       } else {
//         pledge.classList.add("none")
//       }
//     })
//   })
// });


// radios.forEach(radio => {
//   radio.addEventListener('change')
// })

// select.forEach(selected => {
//   selected.addEventListener('click', function () {
//     successModal.classList.remove('none')
//   })
// });

// document.addEventListener('click', (event) => {
//   if (!successModal.contains(event.target) && ![...select].some(selected =>
//     selected.contains(event.target))) {
//     successModal.classList.add('none')
//   }
// })

// done.addEventListener('click', function () {
//   successModal.classList.add('none')
//   selectedModal.classList.add('none')
// })

// // bookmarkImg.addEventListener('click', function() {
// //   document.getElementById('myCircle').setAttribute('fill', 'hsl(176, 50%, 47%)');
// //   document.getElementById('myPath').setAttribute('fill', '#fff');
// // });


// //   var buttons = document.querySelectorAll('button');

// // buttons.forEach(function(button) {
// //   button.addEventListener('click', function(event) {
// //     if (event.target.tagName === 'IMG') {
// //       button.innerHTML += "ed";
// //     }
// //   });
// // });

"use strict";

// DOM element reference
let book = document.getElementById("book");
let outerCircle = document.getElementById("outerCircle");
let innerPath = document.getElementById("innerPath");
let backProject = document.getElementById("back");
let collapse = document.getElementById("collapse");
let closeImg = document.getElementById("close");
let openImg = document.getElementById("open");
let nav = document.getElementById("nav");
let done = document.getElementById("done");
let exit = document.getElementById("exit");
let radio = document.getElementById("radio")
let radio1 = document.querySelector(".drop-1")
let radio2 = document.querySelector(".drop-2")
let radios = document.querySelectorAll(".drop");
let selectedPledgeStart = document.querySelectorAll(".selected-pledge-start");
let successModal = document.querySelector(".Success-modal-start");
let selectedModal = document.querySelector(".selection-modal-start");
let inputValueOne = document.getElementById("input1");
let inputValueTwo = document.getElementById("input2");
let btnOne = document.getElementById("btn1");
let btnTwo = document.getElementById("btn2");
let bookText = document.querySelector(".booked-text");

// Show success modal and reset modals when "done" button is clicked
done.addEventListener("click", () => {
  successModal.classList.add("none");
  selectedModal.classList.add("none");
  resetRadioSelection(); // Clear radio selection when modal closes
  inputValueOne.value = ''
  inputValueTwo.value = ''
});

// Handle "Continue" buttons based on input validation
btnOne.addEventListener("click", function (e) {
  e.preventDefault(); 
  let valueOne = parseInt(inputValueOne.value); 
  if (isNaN(valueOne) || valueOne < 25) {
    return;
  }
  successModal.classList.remove("none");
});

btnTwo.addEventListener("click", function (e) {
  e.preventDefault(); 
  let valueTwo = parseInt(inputValueTwo.value);
  if (isNaN(valueTwo) || valueTwo < 75) {
    return;
  }
  successModal.classList.remove("none");
});

radio.addEventListener('change', function () {
  successModal.classList.remove("none")
  done.addEventListener('click', function () {
    selectedModal.classList.add("none")
    successModal.classList.add("none")
    resetRadioSelection();
  })
})


// Show pledge form when the associated radio is selected
// radio1.forEach(radio => {
  radio1.addEventListener('change', () => {
    radio2.checked = false;
    selectedPledgeStart.forEach(pledge => {
      if (pledge.id === 'pledge1') {
        pledge.classList.remove("none");
      } else {
        pledge.classList.add("none");
      }
    });
  });
// });

// radio2.forEach(radio => {
  radio2.addEventListener('change', () => {
    radio1.checked = false; // Clear the checked state
    selectedPledgeStart.forEach(pledge => {
      if (pledge.id === 'pledge2') {
        pledge.classList.remove("none");
      } else {
        pledge.classList.add("none");
      }
    });
  });
// });

// Show the modal for back project
backProject.addEventListener('click', function () {
  selectedModal.classList.remove('none');
});

// Collapse/expand navigation menu
collapse.addEventListener("click", () => {
  openImg.classList.toggle('none');
  closeImg.classList.toggle('none');
  nav.classList.toggle('block');
});

// Exit the modal and reset radio selections
exit.addEventListener('click', function () {
  selectedModal.classList.add('none');
  resetRadioSelection(); // Clear radio selection when modal closes
});

// Toggle bookmark state and change button text
book.addEventListener('click', function () {
  this.classList.toggle("booked");
  bookText.textContent = this.classList.contains('booked') ? 'Bookmarked' : 'Bookmark';
  changeColor();
});

// Function to toggle colors of SVG elements
function changeColor() {
  let outerColor = outerCircle.getAttribute('fill') === '#2F2F2F' ? 'hsl(176, 50%, 47%)' : '#2F2F2F';
  let innerColor = innerPath.getAttribute('fill') === '#B1B1B1' ? 'white' : '#B1B1B1';
  outerCircle.setAttribute('fill', outerColor);
  innerPath.setAttribute('fill', innerColor);
}

// Function to reset radio selections and hide all pledge forms
function resetRadioSelection() {
  radios.forEach((r, i) => {
      r.checked = false; // Clear the checked state
      console.log(r,i)
      radio.checked= false
  });

  selectedPledgeStart.forEach(pledge => {
    pledge.classList.add("none"); // Hide all pledge forms
  });
}
