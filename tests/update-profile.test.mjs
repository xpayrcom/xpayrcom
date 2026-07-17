import assert from "node:assert/strict";
import test from "node:test";

import { renderCatalog, replaceCatalog } from "../scripts/update-profile.mjs";

const repositories = [
  {
    name: "xpayr-node-sdk",
    html_url: "https://github.com/xpayrcom/xpayr-node-sdk",
    description: "Official Node.js SDK.",
    fork: false,
    archived: false,
  },
  {
    name: "future-integration",
    html_url: "https://github.com/xpayrcom/future-integration",
    description: "A future integration.",
    fork: false,
    archived: false,
  },
  {
    name: "archived-project",
    html_url: "https://github.com/xpayrcom/archived-project",
    description: "Do not list this.",
    fork: false,
    archived: true,
  },
];

test("renders curated and uncategorized repositories without archived projects", () => {
  const catalog = renderCatalog(repositories);
  assert.match(catalog, /### SDKs and packages/);
  assert.match(catalog, /xpayr-node-sdk/);
  assert.match(catalog, /### More XPayr projects/);
  assert.match(catalog, /future-integration/);
  assert.doesNotMatch(catalog, /archived-project/);
});

test("replaces only the generated catalog section and remains deterministic", () => {
  const readme = [
    "# XPayr",
    "",
    "Before",
    "<!-- repository-catalog:start -->",
    "Old content",
    "<!-- repository-catalog:end -->",
    "After",
    "",
  ].join("\n");
  const catalog = renderCatalog(repositories);
  const updated = replaceCatalog(readme, catalog);
  assert.match(updated, /^# XPayr\n\nBefore/);
  assert.match(updated, /<!-- repository-catalog:end -->\nAfter\n$/);
  assert.equal(replaceCatalog(updated, catalog), updated);
});

