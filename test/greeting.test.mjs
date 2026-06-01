import assert from "node:assert/strict";
import test from "node:test";

import { greeting } from "../src/greeting.mjs";

test("greets a named user", () => {
  assert.equal(greeting("Walter"), "Hello, Walter!");
});

test("uses a guest fallback", () => {
  assert.equal(greeting(), "Hello, Guest!");
});

test("supports an enthusiastic greeting", () => {
  assert.equal(greeting("Walter", { enthusiastic: true }), "Hello, Walter!!");
});
