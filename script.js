function addList() {
  let inputBox = document.getElementById("input-box").value;
  const listsContainer = document.getElementById("task-lists");
  const list = document.createElement("li");
  if (inputBox == "") {
    alert("Please enter a valid input");
  } else {
    list.innerHTML = `
    <p>${inputBox}</p>
    `;
    listsContainer.insertBefore(list, listsContainer.firstChild);
  }
  document.getElementById("input-box").value = "";
}

document
  .getElementById("task-lists")
  .addEventListener("click", function (event) {
    const li = event.target.parentNode;
    const list = document.getElementById("task-lists");
    list.removeChild(li);
  });
