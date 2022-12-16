const audio = new Audio(
  "https://raw.githubusercontent.com/SomeAspy/ReCroissant/main/croissant.mp3",
);

function play(): void {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  audio.play();
}

export function start(): void {
  document.addEventListener("click", play);
}

export function stop(): void {
  console.log("🥐");
  document.removeEventListener("click", play);
}
