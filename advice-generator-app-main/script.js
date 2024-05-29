const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const btn = document.getElementById("btn");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      const adviceNum = adviceData.slip.id;
      const advice = adviceData.slip.advice;

      adviceId.textContent = adviceNum;
      adviceContent.innerHTML = `<div>"${advice}"</div>`;
    })
    .catch((error) => {
      console.log(error);
    });
}

btn.addEventListener("click", () => {
  getAdvice();
});

window.onload = () => {
  getAdvice();
};
