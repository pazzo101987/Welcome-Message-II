const button = document.querySelector("button");
const output = document.querySelector(".output");

button.addEventListener("click", showOutput);

function showOutput() {
  const date = new Date();
  let cur = date.getHours();
  let message;
  if (cur >= 0 && cur < 12) {
    message = "It's Morning";
    output.style.backgroundColor = "yellow";
  } else if (cur >= 12 && cur <= 18) {
    message = "It's afternoon";
    output.style.backgroundColor = "blue";
  } else if (cur > 18) {
    message = "it's evening";
    output.style.backgroundColor = "black";
  } else {
    message = "Something went wrong ! ";
    output.style.backgroundColor = "red";
  }
  output.innerHTML = `<h1>${message}</h1>`;
}
