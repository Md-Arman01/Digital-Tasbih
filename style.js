const subhanAllahdisplay = document.getElementById("subhan-allah-display");
const subhanAllahPlusBtn = document.getElementById("subhan-allah-plus-btn");
const subhanAllahMinusBtn = document.getElementById("subhan-allah-minus-btn");

const alhamdulilahDisplay = document.getElementById("alhamdulilah-display");
const alhamdulilahPlusBtn = document.getElementById("alhamdulilah-plus-btn");
const alhamdulilahMinusBtn = document.getElementById("alhamdulilah-minus-btn");

const allahuakberDisplay = document.getElementById("allahuakber-display");
const allahuakberPlusBtn = document.getElementById("allahuakber-plus-btn");
const allahuakberMinusBtn = document.getElementById("allahuakber-minus-btn");

const resetBtn = document.getElementById("reset-btn");

subhanAllahValue = 0;
alhamdulilahValue = 0;
allahuakberValue = 0;

// subhanAllah
subhanAllahPlusBtn.addEventListener("click", function () {
  if (subhanAllahValue === 33) {
    return alert("SubhanAllah Tasbih Completed");
  } else {
    subhanAllahValue += 1;
    subhanAllahdisplay.innerText = subhanAllahValue;
  }
});
subhanAllahMinusBtn.addEventListener("click", function () {
  if (subhanAllahValue === 0) {
    return alert("Please Get Start SubhanAllah Tasbih");
  } else {
    subhanAllahValue -= 1;
    subhanAllahdisplay.innerText = subhanAllahValue;
  }
});
// Alhamdulilah
alhamdulilahPlusBtn.addEventListener("click", function () {
  if (alhamdulilahValue === 33) {
    return alert("Alhamdulilah Tasbih Completed");
  } else {
    alhamdulilahValue += 1;
    alhamdulilahDisplay.innerText = alhamdulilahValue;
  }
});
alhamdulilahMinusBtn.addEventListener("click", function () {
  if (alhamdulilahValue === 0) {
    return alert("Please Get Start Alhamdulilah Tasbih");
  } else {
    alhamdulilahValue -= 1;
    alhamdulilahDisplay.innerText = alhamdulilahValue;
  }
});
// Allahuakber
allahuakberPlusBtn.addEventListener("click", function () {
  if (allahuakberValue === 34) {
    return alert("Allahuakber Tasbih Completed");
  } else {
    allahuakberValue += 1;
    allahuakberDisplay.innerText = allahuakberValue;
  }
});
allahuakberMinusBtn.addEventListener("click", function () {
  if (allahuakberValue === 0) {
    return alert("Please Get Start Allahuakber Tasbih");
  } else {
    allahuakberValue -= 1;
    allahuakberDisplay.innerText = allahuakberValue;
  }
});
// reset

resetBtn.addEventListener("click", function () {
  subhanAllahdisplay.innerText = 0;
  alhamdulilahDisplay.innerText = 0;
  allahuakberDisplay.innerText = 0;
  subhanAllahValue = 0;
  alhamdulilahValue = 0;
  allahuakberValue = 0;
});
