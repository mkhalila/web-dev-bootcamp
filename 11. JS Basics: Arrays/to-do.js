var todoList = []
var option = "";

while (option !== "quit") {
    option = prompt("What would you like to do? " +
                    "New, List, Delete or Quit.");

    if (option === "new")
      addTodo();

    else if (option === "list")
      listTodo()

    else if (option == "delete")
      deleteTodo();
}

function addTodo() {
  var newTodo = prompt("Enter the todo to add.");
  todoList.push(newTodo);
  console.log("[" + newTodo + "] Added to list.");
}

function listTodo() {
  console.log("***********");
  todoList.forEach(function(toDo, i) {
    console.log(i + ": " + toDo);
  });
  console.log("***********");
}

function deleteTodo() {
  var toDelete = prompt("Enter index of ToDo to delete");
  var deleted = todoList.splice(toDelete, 1);
  console.log("Deleted [" + deleted + "]");
}
