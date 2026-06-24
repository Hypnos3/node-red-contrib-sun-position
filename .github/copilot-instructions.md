# Copilot instructions for node-red-contrib-sun-position

## Project context
- This repository contains Node-RED contrib nodes for sun, moon, time, and blind-control behavior.
- Changes should preserve compatibility with Node-RED and Node.js 8+ syntax.
- Prefer small, focused fixes and keep behavior backward-compatible unless a breaking change is explicitly requested.

## Coding conventions
- Follow the existing JavaScript style in the repository: 4-space indentation, single quotes, semicolons, and ESLint-friendly patterns.
- Use CommonJS modules and avoid introducing new dependencies unless clearly necessary.
- Keep code readable and explicit; prefer `const` and `let` over `var`.
- Preserve the existing Node-RED node structure, especially `module.exports = function (RED) { 'use strict'; ... }` patterns.
- Reuse helper logic from the `lib/` directory instead of duplicating similar logic.

## Node-RED specific expectations
- When editing a node implementation, consider the related UI file in the same folder (for example, `.html` files) and the locale JSON files under `locales/`.
- If user-visible text, labels, or defaults change, update the corresponding English and German locale files.
- Keep node configuration and runtime behavior consistent with the existing patterns in the other nodes.

## Maintenance expectations
- If a change affects runtime behavior, add or update tests when practical.
- Prefer minimal diffs that match the surrounding code style.
- Before finishing work, run the project lint/test command and report the result.

## Validation
- Use `npm test` or `npm run lint` as the standard verification step for JavaScript and HTML changes.
- If a command cannot be run because dependencies are missing, say so clearly and describe what was verified instead.
