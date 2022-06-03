export async function login(username, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok !== true) {
    throw res;
  }
  return;
}

export async function logout() {
  const res = await fetch("/api/logout", {
    method: "POST",
  });
  if (res.ok !== true) {
    throw res;
  }
  return;
}
