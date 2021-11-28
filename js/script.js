const changeBackground = (event) => {
  document.body.style.backgroundColor = event.checked ? "black" : "";
  document.body.style.color = event.checked ? "white" : "";
  document.getElementById("container").style.color = event.checked
    ? "black"
    : "";
};
