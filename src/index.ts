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

const fourthTodo: Todo = {
    id: 3,
    title: "addTodoExCercise",
    description: "addTodoExCercise",
    completed: false,
    priority: "medium"
}




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

showTodos("Meine Aufgaben");

function showTodos(heading?: string): void{
    if(heading) {
        console.log(heading);
    }
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
function showOpenTodos(): void{
    for (const i of todos){
        if(i.completed === false){
            console.log("Offene Aufgabe: " + i.title);
        }
    }
}

completeTodo(0);

function completeTodo(id: number): void{
    console.log("Die ID lautet: " + id);
    for (const i of todos){
        if (i.id === id){
            console.log("Gefunden und Titel lautet: " + i.title);
            i.completed = true;
        } 
        
    }
    showTodos();
}



function addTodo(transmitTodo: Todo): void{
    console.log("-------------");
    todos.push(transmitTodo);
    showTodos();
}

addTodo(fourthTodo);

console.log("-------------");
todos.forEach((element) => {
    console.log(element.title);
});

for(const eleme of todos){
    console.log(eleme.title);
}

const foundTodo = todos.find((element) => element.id === 2);

const foundTodo2 = todos.find((element) =>{
    return element.id === 2;
});

const openTodos = todos.filter((element) => element.completed === false);
const titles = todos.map((element) => element.title);
console.log(titles);
console.log(foundTodo);
console.log(openTodos);

const mapTodo = todos.map((element) => element.id);
console.log(mapTodo);

function example(): void{
    console.log("Example");
}
example();

const findUnd = todos.find((element) => element.id === 2);

function findUndPhase2(): void {
    if (findUnd === undefined){
        console.log("Nicht Gefunden");

    }else{
        
        console.log("Gefunden, der titel lautet: " + findUnd.title);
    }
}
console.log(findUnd);

findUndPhase2();
console.log("findTodoById " , findTodoByID(2));
console.log("findTodoById " , findTodoByID(999));
// findTodoByID(2);

function findTodoByID(id: number): Todo | undefined {    
    return todos.find((element) => element.id === id);

}