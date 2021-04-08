let msg = new SpeechSynthesisUtterance();

const inputForm = document.querySelector("input");
const submit = document.querySelector("#submit");

function submitText() {
  msg.text = inputForm.value;
  speechSynthesis.speak(msg);
}

submit.addEventListener("click", submitText);
