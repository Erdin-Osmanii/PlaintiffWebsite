// Create a web worker and run it
const worker = new Worker("timer.js");

// Listen for messages from the web worker
worker.addEventListener("message", event => {
  const elapsedTime = event.data;
  const elapsedTimeInSeconds = Math.round(elapsedTime / 1000);
  document.getElementById("elapsed-time").textContent = `Time spent on site: ${elapsedTimeInSeconds} seconds`;
});

// Start the timer when the page loads
worker.postMessage({type: "start"});

// Stop the timer when the user leaves the page
window.addEventListener("beforeunload", () => {
  worker.postMessage({type: "stop"});
});