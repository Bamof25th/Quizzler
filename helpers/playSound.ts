export default function playSound(sound: string, volume = 0.25) {
  if (localStorage.getItem("sound") === "true") {
    const audio = new Audio(`../sounds/${sound}`);
    audio.volume = volume;
    audio.play();
  }
}

export  function playThemeSound() {
  if (localStorage.getItem("sound") === "true") {
    const audio = new Audio("../sounds/main.m4a");
    audio.volume = 0.15;
    audio.play();
  }
}
