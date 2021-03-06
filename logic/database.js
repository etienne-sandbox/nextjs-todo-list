import jsoning from "jsoning";
import { nanoid } from "nanoid";

const db = new jsoning("db.json");

export async function getTodos() {
  const todos = await db.get("todos");
  return todos ?? [];
}

export async function addTodo(name) {
  const todos = await getTodos();
  todos.push({
    id: nanoid(10),
    name,
    done: false,
  });
  await db.set("todos", todos);
}

export async function toggleTodo(todoId) {
  const todos = await getTodos();
  const todo = todos.find((t) => t.id === todoId);
  if (todo) {
    todo.done = !todo.done;
    await db.set("todos", todos);
  }
}
