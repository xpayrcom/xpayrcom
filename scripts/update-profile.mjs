import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const START_MARKER = "<!-- repository-catalog:start -->";
const END_MARKER = "<!-- repository-catalog:end -->";

const GROUPS = [
  {
    title: "SDKs and packages",
    repositories: [
      "xpayr-node-sdk",
      "xpayr-php-sdk",
      "xpayr-payment-evidence",
      "xpayr-extension-kit",
    ],
  },
  {
    title: "API and developer resources",
    repositories: [
      "xpayr-docs",
      "xpayr-doc-api",
      "xpayr-api-examples",
      "xpayr-postman-collection",
      "xpayr-webhook-examples",
    ],
  },
  {
    title: "Arc Testnet and agent commerce",
    repositories: [
      "xpayr-agent-payments-arc-testnet",
      "xpayr-reconciliation-arc-testnet",
      "xpayr-arc-testnet-examples",
    ],
  },
  {
    title: "Checkout examples",
    repositories: [
      "accept-usdt-payments-example",
      "crypto-checkout-widget-example",
      "xpayr-laravel-example",
    ],
  },
  {
    title: "Commerce integrations",
    repositories: [
      "xpayr-woocommerce-gateway",
      "xpayr-prestashop-gateway",
      "xpayr-magento2-gateway",
      "xpayr-shopware6-gateway",
      "xpayr-opencart-gateway",
      "xpayr-zencart-gateway",
    ],
  },
];

function escapeCell(value) {
  return String(value ?? "").replaceAll("|", "\\|").replaceAll("\n", " ").trim();
}

function renderRows(repositories) {
  return [
    "| Repository | Purpose |",
    "| --- | --- |",
    ...repositories.map((repository) => {
      const description = repository.description || "Official XPayr integration resource.";
      return `| [${escapeCell(repository.name)}](${repository.html_url}) | ${escapeCell(description)} |`;
    }),
  ].join("\n");
}

export function renderCatalog(repositories) {
  const usable = repositories.filter(
    (repository) => !repository.fork && !repository.archived && repository.name !== "xpayrcom",
  );
  const byName = new Map(usable.map((repository) => [repository.name, repository]));
  const included = new Set();
  const sections = [];

  for (const group of GROUPS) {
    const matches = group.repositories.map((name) => byName.get(name)).filter(Boolean);
    if (matches.length === 0) {
      continue;
    }
    matches.forEach((repository) => included.add(repository.name));
    sections.push(`### ${group.title}\n\n${renderRows(matches)}`);
  }

  const remaining = usable
    .filter((repository) => !included.has(repository.name))
    .sort((left, right) => left.name.localeCompare(right.name));
  if (remaining.length > 0) {
    sections.push(`### More XPayr projects\n\n${renderRows(remaining)}`);
  }

  return sections.join("\n\n");
}

export function replaceCatalog(readme, catalog) {
  const start = readme.indexOf(START_MARKER);
  const end = readme.indexOf(END_MARKER);
  if (start === -1 || end === -1 || end < start) {
    throw new Error("README repository catalog markers are missing or invalid.");
  }

  const prefix = readme.slice(0, start + START_MARKER.length);
  const suffix = readme.slice(end);
  return `${prefix}\n${catalog}\n${suffix}`;
}

async function fetchRepositories() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "xpayr-profile-catalog",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    "https://api.github.com/users/xpayrcom/repos?per_page=100&type=owner&sort=full_name",
    { headers },
  );
  if (!response.ok) {
    throw new Error(`GitHub repository request failed with ${response.status}.`);
  }
  return response.json();
}

async function main() {
  const readmePath = new URL("../README.md", import.meta.url);
  const repositories = process.env.XPAYR_REPOSITORIES_FIXTURE
    ? JSON.parse(await readFile(process.env.XPAYR_REPOSITORIES_FIXTURE, "utf8"))
    : await fetchRepositories();
  const current = await readFile(readmePath, "utf8");
  const next = replaceCatalog(current, renderCatalog(repositories));

  if (next === current) {
    console.log("Repository catalog is already current.");
    return;
  }

  await writeFile(readmePath, next, "utf8");
  console.log("Repository catalog updated.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}

