const setValueOfCreateDateInput = () => {
  const createDateInput = document.getElementById("create-date");
  const actualDate = new Date().toISOString().split("T")[0];
  createDateInput.value = actualDate;
};
setValueOfCreateDateInput();

const handleCreateNewTask = (e) => {
  e.preventDefault();

  // get values of inputs
  const createDate = document.getElementById("create-date").value;
  const limitDate = document.getElementById("limit-date").value;
  const description = document.getElementById("description").value;

  if (description.trim().length < 10) {
    // showToast("A descrição deve ter mais que 10 caracteres");
  }

  const task = {
    createDate,
    limitDate,
    description,
  };

  console.log(task);

  // const form = document.getElementById("create-new-task");
};

// Função mudar cor
const changeBackground = (e) => {
  e.preventDefault();
  let darkButton = document.getElementById("dark");
  document.body.style.backgroundColor = darkButton.onclick()? 'blue' : backgroundColor.default;
}