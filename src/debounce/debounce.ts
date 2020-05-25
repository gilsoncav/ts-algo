export default function debounce(fn: Function, interval: number) {
  let waiting = false;
  let timeoutID: number = -1;

  return (...args: any) => {
    // if we're still counting down...
    if (waiting) {
      // renew the countdown
      if (timeoutID !== -1) clearTimeout(timeoutID);
    } else {
      // if the countdown was finished, we're ready to go active
      fn(...args);
      waiting = true;
      // starts a countdown
    }
    timeoutID = window.setTimeout(() => waiting = false, interval);

  };

}