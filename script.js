const WIGGLE_OFFSET = 2; // This is like how far up and down the letters should go.
const WIGGLE_NUM_LET = 3; // This is how many letters should be in one 'wave'

// Run this when the page loads
let toWiggle = document.querySelectorAll(".wiggle");

[...toWiggle].forEach((text) => {
  wiggle(text);
});

/**
 * Given a single text element, makes the text wiggly
 * text {HTMLElement} - the page element that should be wiggled
 **/
function wiggle(text) {
  let words = text.textContent;

  text.classList.add("wiggle");
  text.innerHTML = "";

  for (let j = 0; j < words.length; j++) {
    let sp = document.createElement("span");
    sp.textContent = words[j];
    // Maybe some day these letters will be colorful...
    // sp.style.color = "hsl(" + Math.floor(Math.random() * 361) + ", 100%, 50%)";

    text.appendChild(sp);
  }

  let loop = 0;
  let timerId = setInterval(() => {
    for (let j = 0; j < words.length; j++) {
      let magicNumber = WIGGLE_NUM_LET * WIGGLE_OFFSET;
      let yCoord = ((magicNumber) + (WIGGLE_OFFSET * j) + (WIGGLE_OFFSET * loop)) % (magicNumber);

      text.children[j].style.top = yCoord + "px";
    }
    loop++;
  }, 300);
}



crazyCaps();

function crazyCaps() {
    let crazyItems = document.querySelectorAll(".crazy");
    for (let i = 0; i < crazyItems.length; i++) {
      let crazyTextItem = crazyItems[i];
      
      let cnt = 0;
      setInterval(() => {
        let newText = crazyTextItem.textContent.substring(0, cnt).toLowerCase() + crazyTextItem.textContent[cnt].toUpperCase() + crazyTextItem.textContent.substring(cnt + 1, crazyTextItem.textContent.length).toLowerCase();
        crazyTextItem.textContent = newText;

        cnt += 1;

        if (cnt > crazyTextItem.textContent.length - 1) {
          cnt = 0;
        }

      }, 150  );
    }
  }
