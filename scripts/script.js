const container = document.getElementsByClassName("first-container")[0];
const text = document.getElementsByClassName("first")[0];


// animation for step 1
const step1Animate = () => {
  container.classList.add("first-container-step1");
  text.classList.add("first-step1");

  //reload after execution
  setTimeout(() => {
    location.reload();
    return true;
  }, 4000);
}

// animation for step 2
const step2Animate = () => {
  container.classList.add("first-container-step2");
  text.classList.add("first-step2");

  //reload after execution
  setTimeout(() => {
    location.reload();
    return true;
  }, 4000);
}

// animation for step 3
const step3Animate = () => {
  container.classList.add("first-container-step3");
  text.classList.add("first-step3");

  //reload after execution
  setTimeout(() => {
    location.reload();
    return true;
  }, 5000);
}

// animation for step 4
const step4Animate = () => {
  //add classes to first line
  container.classList.add("first-container-step4-1");
  text.classList.add("first-step4-1");
  //add classes to second line
  document.getElementsByClassName("second-container")[0].classList.add("first-container-step4-2");
  document.getElementsByClassName("second")[0].classList.add("first-step4-2");
  //add classes to third line
  document.getElementsByClassName("third-container")[0].classList.add("first-container-step4-3");
  document.getElementsByClassName("third")[0].classList.add("first-step4-3");

  //reload after execution
  setTimeout(() => {
    location.reload();
    return true;
  }, 8000);
}
