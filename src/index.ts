// Aufgabe 1: Variablen und Datentypen
//
// TODO: Erstelle eine Variable fuer deinen Namen mit dem Typ string.
// TODO: Erstelle eine Variable fuer dein Alter mit dem Typ number.
// TODO: Erstelle eine Variable, die angibt, ob du gerade TypeScript lernst,
//       mit dem Typ boolean.
// TODO: Gib die drei Werte mit console.log() aus.
//
// Schreibe deinen eigenen Code unter diese Kommentare.
// Pruefen: npm run typecheck
// Ausfuehren: npm start
// Noch keine Aufgabenverwaltung programmieren: Wir beginnen ganz klein.


// Das ist mein erste TypeScript Code
var name: string = "John Doe";
let alter: number = 23;
const isTrue: boolean = true;
console.log("Name " + name);
console.log("Alter " + alter);
console.log("Lernst du TypeScript? " + isTrue);
console.log("test");

console.log("Das ist ein Test.");


interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  //Priority = Union Type
  priority: "low" | "medium" | "high";
}

const firstTodo: Todo = {
    id: 0,
    title: "Test",
    description: "das ist mein erstes Interface",
    completed: false,
    priority: "low"
};
console.log(firstTodo);

const secondTodo: Todo = {
    id: 1,
    title: "zweiter Versuch",
    description: "Das ist der zweite Versuch",
    completed: true,
    priority: "medium"
};
console.log(secondTodo);

const thirdTodo: Todo = {
    id: 2,
    title:"Git lernen",
    description: "Lernen",
    completed: false,
    priority: "high"
};
console.log(thirdTodo);

const test: string = "test";
let test2: string;

const todos: Todo[] = [firstTodo, secondTodo, thirdTodo];
console.log("-----------");
console.log(todos);
console.log(todos.length);

console.log("Schleifen-----------");
for(const element of todos) {
    console.log(element.title);
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].priority);
}

for (let i = 0; i< todos.length; i++) {
    if(todos[i].completed === false) {
        console.log(todos[i].title + " ist noch nicht fertig.");
    }
}



function showTodos(){
    for (const element of todos) {
        if(element.completed === true){
            console.log("[x] " + element.title);
        } else{
            console.log("[ ] " + element.title);
        }
        if(element.priority === "high") {
            console.log("WICHTIG");
        }
    }
}

showTodos();
showOpenTodos();
function showOpenTodos(){
    for (const i of todos){
        if(i.completed === false){
            console.log("Offene Aufgabe: " + i.title);
        }
    }
}

completeTodo(0);

function completeTodo(id: number){
    console.log("Die ID lautet: " + id);
}