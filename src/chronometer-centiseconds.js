class Chronometer {
  constructor() {
    (this.currentTime = 0), (this.intervalId = null);
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 10);
  }

  getMinutes() {
    let minutes = this.currentTime / 6000;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = (this.currentTime / 100) % 60;
    return Math.floor(seconds);
  }

  getCentiseconds() {
    let centiseconds = this.currentTime % 100;
    return Math.floor(centiseconds);
  }

  /*
CONVERSIONS
1000 ms = 100 cs
10 ms = 1 cs
*/

  computeTwoDigitNumber(value) {
    return ("0" + value).slice(-2);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${minutes}:${seconds}.${centiseconds}`;
  }
}
