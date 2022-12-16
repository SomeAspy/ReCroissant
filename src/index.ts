export function start(): Promise<void> {
  document.addEventListener("click", function play() {
    const audio = new Audio(
      "https://raw.githubusercontent.com/SomeAspy/ReCroissant/main/croissant.mp3",
    );
    audio.play();
  });
}

export function stop(): void {
  console.log("You must restart replugged :clueless:");
}
