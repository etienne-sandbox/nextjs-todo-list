import { withIronSessionApiRoute } from "iron-session/next";
import { toggleTodo } from "../../logic/database";
import { sessionConfig } from "../../logic/session";

export default withIronSessionApiRoute(async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Method" });
    return;
  }
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  await toggleTodo(req.body.todoId);
  res.status(204).end();
}, sessionConfig);
