const setValueOfCreateDateInput = () => {
  const createDateInput = document.getElementById("create-date");
  const actualDate = new Date().toISOString().split("T")[0];
  createDateInput.value = actualDate;
};
setValueOfCreateDateInput();

const showToast = (message) => {
  const toast = document.getElementById("toast");
  toast.setAttribute("class", "active");
  toast.innerText = message
  setTimeout(() => {
    toast.removeAttribute("class", "active");
  }, 3000);
};

const handleCreateNewTask = (e) => {
  e.preventDefault();

  // get values of inputs
  const createDate = document.getElementById("create-date").value;
  const limitDate = document.getElementById("limit-date").value;
  const description = document.getElementById("description").value;

  if (description.length < 10) {
    showToast("A descrição deve ter mais que 10 caracteres");
    return
  }

  const task = {
    createDate,
    limitDate,
    description,
  };

  console.log(task);

  // const form = document.getElementById("create-new-task");
};

const changeBackground = (event) => {
  document.body.style.backgroundColor = event.checked ? 'black' : "";
  document.body.style.color = event.checked ? 'white' : "";
  document.getElementById('container').style.color = event.checked ? 'black' : "";
}