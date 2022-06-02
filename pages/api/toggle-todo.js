import { toggleTodo } from "../../logic/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Method" });
    return;
  }
  await toggleTodo(req.body.todoId);
  res.status(204).end();
}
