


let input = prompt("What would you like to do?");

const todos = [];

while (input !== "quit" && input !== "q") {

    if (input === "new") {
        let newTodo = prompt("What would you like to add to the list? ");
        todos.push(newTodo);
        console.log(`"${newTodo}" has been added to the list.`);
    }
    else if (input === "list") {
        console.log("_ _ _ _ _ _ _ _ _ _ _ _")
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i + 1} :- ${todos[i]}`);
        }
        console.log("_ _ _ _ _ _ _ _ _ _ _ _")
    }
    else if (input === "delete") {
        let index = parseInt(prompt("Enter the number of the item you would like to delete:")) - 1;
        while (isNaN(index) || index > todos.length - 1) {
            index = parseInt(prompt("Please enter a valid number")) - 1;
        }
        let deletedValue = todos.splice(index, 1);
        console.log(`You have deleted "${deletedValue}".`);
    }

    input = prompt("What would you like to do?");

}
console.log("You have quit the application."); 
