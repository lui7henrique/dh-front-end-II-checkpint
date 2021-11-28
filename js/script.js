const changeBackground = (event) => {
  document.body.style.backgroundColor = event.checked ? "black" : "";
  document.getElementById("container").style.color = event.checked ? "black" : "";
};
