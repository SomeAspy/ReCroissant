export function start(): void {
  document.addEventListener("click", function play() {
    const audio = new Audio(
      "https://raw.githubusercontent.com/SomeAspy/ReCroissant/main/croissant.mp3",
    );
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    audio.play();
  });
}

export function stop(): void {
  console.log("You must restart replugged :clueless:");
}
