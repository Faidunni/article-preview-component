const share = document.querySelector(".share");
const groupIcon = document.querySelector(".group-icon");

share.addEventListener("click", function () {
  groupIcon.classList.toggle("show-icon");
});
