import "./style.css";

const red = document.querySelector<HTMLInputElement>("#red")!;
const green = document.querySelector<HTMLInputElement>("#green")!;
const blue = document.querySelector<HTMLInputElement>("#blue")!;
const color = document.querySelector<HTMLSpanElement>("#color")!;

function valueToHex(n: number) {
  if (n > 255) n = 255;
  if (n < 0) n = 0;
  const hex = n.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + valueToHex(r) + valueToHex(g) + valueToHex(b);
}

const handleChange = () => {
  const nwColor = rgbToHex(red.valueAsNumber, green.valueAsNumber, blue.valueAsNumber);
  color.style.color = nwColor;
  color.innerHTML = nwColor;
  document.body.style.backgroundColor = nwColor;
};
[red, green, blue].forEach((input) => {
  input.addEventListener("input", handleChange);
});


window.addEventListener("load", () => {
  handleChange();
})