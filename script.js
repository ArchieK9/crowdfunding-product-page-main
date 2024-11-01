"use strict"

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
let selectBtns = document.querySelectorAll(".select");
let backers = document.getElementById("backers")
let backed = document.getElementById("backed")


done.addEventListener("click", () => {
  successModal.classList.add("none");
  selectedModal.classList.add("none");
  resetRadioSelection(); 
  inputValueOne.value = ''
  inputValueTwo.value = ''
});


btnOne.addEventListener("click", function (e) {
  e.preventDefault(); 

  let valueOne = parseInt(inputValueOne.value); 
  if (isNaN(valueOne) || valueOne < 25) {
    return;
  }

  successModal.classList.remove("none");

  let currentBacked = parseInt(backed.textContent.replace(/[^0-9]/g, ''), 10);
  let currentBackers = parseInt(backers.textContent.replace(/[^0-9]/g, ''), 10);

  if (currentBacked >= 100000) {
    selectBtns.forEach(btn => btn.disabled = true);
    return;
  }
  
  backed.textContent = "$" + (currentBacked + valueOne).toLocaleString();
  backers.textContent = (currentBackers + 1).toLocaleString();
});

btnTwo.addEventListener("click", function (e) {
  e.preventDefault(); 

  let valueTwo = parseInt(inputValueTwo.value);
  if (isNaN(valueTwo) || valueTwo < 75) {
    return;
  }
  successModal.classList.remove("none");

  let currentBacked = parseInt(backed.textContent.replace(/[^0-9]/g, ''), 10);
  let currentBackers = parseInt(backers.textContent.replace(/[^0-9]/g, ''), 10);

  if (currentBacked >= 100000) {
    selectBtns.forEach(btn => btn.disabled = true);
    return;
  }
  
  backed.textContent = "$" + (currentBacked + valueTwo).toLocaleString();
  backers.textContent = (currentBackers + 1).toLocaleString();
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


function changeColor() {
  let outerColor = outerCircle.getAttribute('fill') === '#2F2F2F' ? 'hsl(176, 50%, 47%)' : '#2F2F2F';
  let innerColor = innerPath.getAttribute('fill') === '#B1B1B1' ? 'white' : '#B1B1B1';
  outerCircle.setAttribute('fill', outerColor);
  innerPath.setAttribute('fill', innerColor);
}

function resetRadioSelection() {
  radios.forEach((r, i) => {
      r.checked = false; 
      console.log(r,i)
      radio.checked= false
  });

  selectedPledgeStart.forEach(pledge => {
    pledge.classList.add("none"); 
  });
}


selectBtns[0].addEventListener('click', () => {
  let currentBacked = parseInt(backed.textContent.replace(/[^0-9]/g, ''), 10);
  let currentBackers = parseInt(backers.textContent.replace(/[^0-9]/g, ''), 10);

  if (currentBacked >= 100000) {
    selectBtns.forEach(btn => btn.disabled = true);
    return;
  }

  backed.textContent = "$" + (currentBacked + 25).toLocaleString();
  backers.textContent = (currentBackers + 1).toLocaleString();

  successModal.classList.remove("none")
});



selectBtns[1].addEventListener('click', () => {
  let currentBacked = parseInt(backed.textContent.replace(/[^0-9]/g, ''), 10);
  let currentBackers = parseInt(backers.textContent.replace(/[^0-9]/g, ''), 10);

  if (currentBacked >= 100000) {
    selectBtns.forEach(btn => btn.disabled = true);
    return;
  }

  backed.textContent = "$" + (currentBacked + 75).toLocaleString();
  backers.textContent = (currentBackers + 1).toLocaleString();

  successModal.classList.remove("none")
});
