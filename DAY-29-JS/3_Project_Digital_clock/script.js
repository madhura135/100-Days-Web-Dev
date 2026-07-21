const displayTimeBox = document.querySelector(".container");

window.onload = () => {
  setInterval(() => {
    const now = new Date();

    let h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const amPm = h >= 12 ? "PM" : "AM";

    h = h % 12;
    h = h === 0 ? 12 : h;

    const timeString = `${h}:${m}:${s} ${amPm}`;

    console.log(timeString);

    displayTimeBox.textContent = timeString;
  }, 1000);
};
