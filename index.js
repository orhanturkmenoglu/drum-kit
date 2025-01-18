// Drum butonlarının uzunluğunu al
const drumButtons = document.querySelectorAll(".drum");
const soundMap = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "crash.mp3",
  l: "kick-bass.mp3",
};

// Tüm drum butonlarına tıklama olayını ekle
drumButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
});

// Klavye tuşlarına basıldığında ses çalma
document.addEventListener("keypress", function (event) {
  const key = event.key.toLowerCase(); // Küçük harfe çevir
  if (soundMap[key]) {
    makeSound(key);
    buttonAnimation(key);
  }
});

function makeSound(key) {
  const soundFile = soundMap[key];
  if (soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
