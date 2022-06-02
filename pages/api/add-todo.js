import { addTodo } from "../../logic/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Method" });
    return;
  }
  await addTodo(req.body.name);
  res.status(204).end();
}
