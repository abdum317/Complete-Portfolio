const html = {
  "strokeBottom": 5,
  "colorSlice": "#30bae7",
  "colorCircle": "#f1f1f1",
  "round": true,
}
const global = new CircularProgressBar('global', html);
global.initial();

const java = {
  "strokeBottom": 5,
  "colorSlice": "#d74680",
  "colorCircle": "#f1f1f1",
  "round": true,
}
const jsCircle = new CircularProgressBar('globals', java);
jsCircle.initial();








const tailwind = {
  "strokeBottom": 5,
  "colorSlice": "#15c7a8",
  "colorCircle": "#f1f1f1",
  "round": true,
}
const globals = new CircularProgressBar('js', tailwind);
globals.initial();

















const gits = {
  "strokeBottom": 5,
  "colorSlice": "#eb7d4b",
  "colorCircle": "#f1f1f1",
  "round": true,
}
const git = new CircularProgressBar('git', gits);
git.initial();








let input = document.querySelector("#input");
let inputs = document.querySelector("#inputs");
let text = document.querySelector("#text");
document.getElementById("button");
let button = () => {
  if (validateEmail() == false || validateName() == false) {
    swal({
      title: "Please enter correct name or email",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
  } else {
    swal("Thank you for getting in touch!", "", "success");
    input.value = "";
    inputs.value = "";
    text.value = "";
  }
}



function validateEmail() {
  var emailCorrectPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
  if (!(inputs.value.match(emailCorrectPattern))) {

    return false;
  }
}



function validateName() {
  var nameCorrector = /\S+/;
  if ((input.value.match(nameCorrector))) {
    return true;
  }
}


let email = document.querySelector("#inputs")
let clientName = document.querySelector("#input")
let textarea = document.querySelector("#text")
let saveButton = document.querySelector("#button")
let loader = document.getElementById("loader");
import { auth, db, app } from "./firebaseconfig.js";
import { collection, addDoc, Timestamp, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

saveButton.addEventListener("click", async () => {
  saveButton.style.display = "none"
  loader.style.display = "block"

    let todosCollection = collection(db, "ClientResponse");
    await addDoc(todosCollection, { Name: clientName.value, email: email.value, info: textarea.value, time: Timestamp.fromDate(new Date()) });

  if (validateEmail() == false || validateName() == false) {
    swal({
      title: "Please enter correct name or email",
      icon: "warning",
      buttons: true,
      dangerMode: true,

    })
    saveButton.style.display = "block"
    loader.style.display = "none"
  } else {
    swal("Thank you for getting in touch!", "", "success");
    input.value = "";
    inputs.value = "";
    text.value = "";
    saveButton.style.display = "block"
    loader.style.display = "none"
  }

});
