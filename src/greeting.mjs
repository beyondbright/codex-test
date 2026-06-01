export function greeting(name = "Guest", { enthusiastic = false } = {}) {
  return `Hello, ${name}${enthusiastic ? "!!" : "!"}`;
}
