#!/usr/bin/env node
 
// Protocol:
// - Read ONE JSON object from stdin (optional).
// - Write ONE JSON value to stdout.
// - No logging to stdout (use stderr if needed).

const fs = require("node:fs");

let params = {};
try {
  const input = fs.readFileSync(0, "utf8").trim();
  if (input) {
    params = JSON.parse(input);
  }
} catch (e) {
  process.stderr.write(
    `hello.js: invalid JSON input: ${e.message}\n`
  );
  process.exit(1);
}

const name = typeof params.name === "string" ? params.name : "world";

const result = {
  ok: true,
  message: `hello, ${name}`,
  pid: process.pid,
};

process.stdout.write(JSON.stringify(result));

