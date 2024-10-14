"use strict"

let book = document.getElementById("book")
let outerCircle = document.getElementById("outerCircle");
let innerPath = document.getElementById("innerPath");
let backProject = document.getElementById("back")
let selectBtns = document.querySelectorAll(".select")
let collapse = document.getElementById("collapse");
let closeImg = document.getElementById("close");
let openImg = document.getElementById("open");
let nav = document.getElementById("nav")
let radio = document.getElementById("radio")
let dropDown = document.querySelectorAll(".drop")
let done = document.getElementById("done")
let exit = document.getElementById("exit")
let selectedPledgeStart = document.querySelectorAll(".selected-pledge-start")
let successModal = document.querySelector(".Success-modal-start")
let selectedModal = document.querySelector(".selection-modal-start")
let hasAppended = true;
let form = document.querySelectorAll('.myForm')
let radios = document.querySelectorAll(".drop")
let inputValueOne = document.getElementById("input1")
let inputValueTwo = document.getElementById("input2")
let btnOne = document.getElementById("btn1")
let btnTwo = document.getElementById("btn2")
let validator = true


btnOne.addEventListener("click", function (e) {
  e.preventDefault(); 
  let valueOne = parseInt(inputValueOne.value); 

  if (inputValueOne.value === "" && valueOne < 25) {
    return
  }

  successModal.classList.remove("none");
  done.addEventListener("click", () => {
    successModal.classList.add("none");
    selectedModal.classList.add("none")
  });
});

btnTwo.addEventListener("click", function (e) {
  e.preventDefault(); 
  let valueTwo = parseInt(inputValueTwo.value); 

  if (inputValueTwo.value === "" && valueTwo < 75) {
    return 
  }

  successModal.classList.remove("none");
  done.addEventListener("click", () => {
    successModal.classList.add("none");
    selectedModal.classList.add("none")
  });
});


backProject.addEventListener('click', function () {
  selectedModal.classList.remove('none')
})

collapse.addEventListener("click", ()=>{
  openImg.classList.toggle('none')
  closeImg.classList.toggle('none')
  nav.classList.toggle('block')
})

book.addEventListener('click', function () {
  // Toggle the booked class
  this.classList.toggle("booked");

  // Append "ed" once
  if (hasAppended) {
      this.innerHTML += "ed"; // Append "ed" to button text
      hasAppended = false; // Prevent further appending
  }

  // Change the colors of the SVG elements
  changeColor();
});

function changeColor() {
  // Toggle between the original color and the HSL color
  let outerColor = outerCircle.getAttribute('fill') === '#2F2F2F' ? 'hsl(176, 50%, 47%)' : '#2F2F2F';
  let innerColor = innerPath.getAttribute('fill') === '#B1B1B1' ? 'white' : '#B1B1B1';

  outerCircle.setAttribute('fill', outerColor);
  innerPath.setAttribute('fill', innerColor);
}

selectBtns.forEach(selectedBtn => {
  selectedBtn.addEventListener('click', () =>{
    successModal.classList.remove("none")
      done.addEventListener('click', () =>{
    successModal.classList.add("none")
  })
  })
})

exit.addEventListener('click', function () {
  selectedModal.classList.add('none')
})

radio.addEventListener('change', function () {
  successModal.classList.remove("none")
  done.addEventListener('click', function () {
    selectedModal.classList.add("none")
    successModal.classList.add("none")
  })
})

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    selectedPledgeStart.forEach(pledge => {
      if (pledge.id === radio.getAttribute('data-target')) {
        pledge.classList.remove("none")
      } else {
        pledge.classList.add("none")
      }
    })
  })
});


radios.forEach(radio => {
  radio.addEventListener('change')
})

select.forEach(selected => {
  selected.addEventListener('click', function () {
    successModal.classList.remove('none')
  })
});

document.addEventListener('click', (event) => {
  if (!successModal.contains(event.target) && ![...select].some(selected =>
    selected.contains(event.target))) {
    successModal.classList.add('none')
  }
})

done.addEventListener('click', function () {
  successModal.classList.add('none')
  selectedModal.classList.add('none')
})

// bookmarkImg.addEventListener('click', function() {
//   document.getElementById('myCircle').setAttribute('fill', 'hsl(176, 50%, 47%)');
//   document.getElementById('myPath').setAttribute('fill', '#fff');
// });


//   var buttons = document.querySelectorAll('button');

// buttons.forEach(function(button) {
//   button.addEventListener('click', function(event) {
//     if (event.target.tagName === 'IMG') {
//       button.innerHTML += "ed";
//     }
//   });
// });
