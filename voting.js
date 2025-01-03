window.onload = build;

const message = document.getElementById("message");
const addNew = document.getElementById("addNew");
const newInput = document.getElementById("addFriend");
const output = document.getElementById("output");
let myArray = [
  "Musa",
  "Muhammed",
  "Hashidu",
  "Abdulrahim",
  "Abdulhakim",
  "Nafisat",
  "Bilikis",
  "Khadijah",
  "Rukayah",
  "Salamat",
  "Faridah",
];
addNew.onclick = function () {
  const newFriend = newInput.value;
  adder(newFriend, myArray.length, 0);
  myArray.push(newFriend);
};
function build() {
  myArray.forEach((item, index) => {
    adder(item, index, 0);
  });
}
function adder(name, index, counter) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.classList.add("box");
  td1.textContent = index + 1;
  const td2 = document.createElement("td");
  td2.textContent = name;
  const td3 = document.createElement("td");
  td3.textContent = counter;
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.onclick = function () {
    console.log(tr.lastChild);
    let val = Number(tr.lastChild.textContent);
    val++;
    tr.lastChild.textContent = val;
  };
  output.appendChild(tr);
}
