import { addTodo } from "../../logic/database";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionConfig } from "../../logic/session";

export default withIronSessionApiRoute(async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(404).json({ error: "Invalid Method" });
    return;
  }
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  await addTodo(req.body.name);
  res.status(204).end();
}, sessionConfig);
