const elements = document.querySelectorAll(".emoji");
elements.forEach((element) =>
  element.addEventListener("click", () => {
    if (element.innerHTML == "😊") {
      element.innerHTML = "😒";
    } else if (element.innerHTML == "😒") {
      element.innerHTML = "😊";
    }
  })
);
