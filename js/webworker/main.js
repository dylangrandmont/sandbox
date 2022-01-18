function logToResultDiv(text) {
  const element = document.getElementById("result");
  const existingText = element.innerHTML;
  element.innerHTML = `${existingText} <p>${text}</p>`;
}

function clearResults() {
  const element = document.getElementById("result");
  element.innerHTML = "";
}

let startTime;

function start() {
  startTime = new Date();
}

function end() {
  const endTime = new Date();
  const timeDiff = endTime - startTime;
  const seconds = Math.round(timeDiff);

  logToResultDiv(`Event Loop blocked for ${seconds} ms`);
}

function calculateWithWebWorker() {
  start();
  const worker = new Worker("calc.js");
  worker.onmessage = function (event) {
    logToResultDiv(`Calculation Result: ${event.data}`);
  };
  worker.onerror = function (error) {
    logToResultDiv(`Worker error:  ${error.message}`);
    throw error;
  };
  worker.postMessage(10000000000);
  end();
}

function calculateOnMainThread() {
  start();
  let total = 0;
  for (let i = 0; i < 10000000000; i++) {
    total = total + 1;
  }
  logToResultDiv(`Calculation Result: ${total}`);
  end();
}
