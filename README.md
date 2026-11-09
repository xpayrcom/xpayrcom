# XPayr

XPayr is non-custodial crypto payment infrastructure for merchants, platforms, and agent-driven commerce. Build hosted checkout (Dual Checkout: Web3 1-Click Pay & Direct Exchange Transfer / QR), multi-chain payment links, embedded widgets, API integrations, webhooks, settlement routing, and verifiable payment evidence without giving XPayr custody of merchant funds.

[![MCP Server](https://img.shields.io/npm/v/%40xpayr%2Fmcp-server?label=%40xpayr%2Fmcp-server&color=029bfd)](https://www.npmjs.com/package/@xpayr/mcp-server)
[![xpayr-mcp](https://img.shields.io/npm/v/xpayr-mcp?label=xpayr-mcp&color=10b981)](https://www.npmjs.com/package/xpayr-mcp)
[![MCP Registry](https://img.shields.io/badge/MCP_Registry-io.github.xpayrcom%2Fxpayr--mcp--server-8b5cf6)](https://registry.modelcontextprotocol.io/v0/servers?search=xpayr)
[![GHCR Docker](https://img.shields.io/badge/GHCR-ghcr.io%2Fxpayrcom%2Fxpayr--mcp--server-2496ed)](https://github.com/xpayrcom/xpayr-mcp-server/pkgs/container/xpayr-mcp-server)
[![Node SDK](https://img.shields.io/npm/v/%40xpayr%2Fnode-sdk?label=Node%20SDK)](https://www.npmjs.com/package/@xpayr/node-sdk)
[![Payment Evidence](https://img.shields.io/npm/v/%40xpayr%2Fpayment-evidence?label=Payment%20Evidence)](https://www.npmjs.com/package/@xpayr/payment-evidence)
[![PHP SDK](https://img.shields.io/packagist/v/xpayr/xpayr-php?label=PHP%20SDK)](https://packagist.org/packages/xpayr/xpayr-php)
[![Extension Kit](https://img.shields.io/npm/v/%40xpayr%2Fextension-kit?label=Extension%20Kit)](https://www.npmjs.com/package/@xpayr/extension-kit)

## Build with XPayr

- **Official 21-Tool MCP Server**: Run `npx -y @xpayr/mcp-server` inside Claude Desktop, Cursor, VS Code Copilot, Windsurf, or Cline to create multi-chain payment sessions, manage webhooks, and orchestrate AI agent payment intents.
- Create testnet payment sessions with server-side API keys.
- Send customers to hosted checkout or embed the checkout widget.
- Verify webhook signatures before updating orders or balances.
- Reconcile payment intent, on-chain receipt, platform fee, and merchant settlement.
- Use Arc Mainnet & Testnet references for agent-wallet payments, evidence anchoring, and reconciliation experiments.

[Developer Hub](https://xpayr.com/developers) | [AI & MCP Portal](https://xpayrcom.github.io/) | [API Documentation](https://xpayr.com/doc-api) | [Testnet Registration](https://xpayr.com/merchant/register) | [Security Contact](https://xpayr.com/contact)

## Official repositories

<!-- repository-catalog:start -->
### AI Agent & Model Context Protocol (MCP) Ecosystem

| Repository | Purpose |
| --- | --- |
| [xpayr-mcp-server](https://github.com/xpayrcom/xpayr-mcp-server) | Official 21-tool Model Context Protocol (MCP) server (`@xpayr/mcp-server` & `xpayr-mcp`), OpenAPI 3.1.0 spec, n8n workflows, Docker GHCR container, and AI agent payment starter kit. |
| [xpayrcom.github.io](https://github.com/xpayrcom/xpayrcom.github.io) | Official XPayr Developer & AI Agent Root Portal hosted at `https://xpayrcom.github.io/` with 1-click Cursor/VS Code MCP install links, `llms.txt`, and OpenAPI 3.1.0 schemas. |
| [xpayr-portal](https://github.com/xpayrcom/xpayr-portal) | Official XPayr Developer & AI Agent Portal hosted on GitHub Pages (`https://xpayrcom.github.io/xpayr-portal/`) with 1-click Cursor/VS Code MCP install links, `llms.txt`, and OpenAPI 3.1.0 schemas. |

### SDKs and packages

| Repository | Purpose |
| --- | --- |
| [xpayr-node-sdk](https://github.com/xpayrcom/xpayr-node-sdk) | Official Node.js SDK for creating XPayr payment sessions, verifying webhooks, and integrating direct-to-wallet crypto checkout. |
| [xpayr-php-sdk](https://github.com/xpayrcom/xpayr-php-sdk) | Official PHP SDK for XPayr payment sessions, merchant operations, webhook verification, and server-side crypto checkout integrations. |
| [xpayr-payment-evidence](https://github.com/xpayrcom/xpayr-payment-evidence) | Canonical payment-evidence envelopes, deterministic hashing, and Merkle inclusion proofs for independently verifiable XPayr receipts. |
| [xpayr-extension-kit](https://github.com/xpayrcom/xpayr-extension-kit) | Crypto-native licensing for browser extensions. The licence is the paying wallet — no email, no licence keys, no chargebacks. Works offline, verifies ES256 tokens locally. |

### API and developer resources

| Repository | Purpose |
| --- | --- |
| [xpayr-docs](https://github.com/xpayrcom/xpayr-docs) | Official XPayr developer documentation for payment sessions, webhooks, testnet checkout, and agent-commerce integrations. |
| [xpayr-doc-api](https://github.com/xpayrcom/xpayr-doc-api) | Production-oriented XPayr Merchant API reference covering authentication, payment sessions, webhook delivery, and balance reporting. |
| [xpayr-api-examples](https://github.com/xpayrcom/xpayr-api-examples) | Production-oriented examples for XPayr payment sessions, hosted checkout, webhooks, and testnet-first merchant integrations. |
| [xpayr-postman-collection](https://github.com/xpayrcom/xpayr-postman-collection) | Official Postman collection and environments for exploring the XPayr Merchant API and testnet payment lifecycle. |
| [xpayr-webhook-examples](https://github.com/xpayrcom/xpayr-webhook-examples) | Secure webhook verification examples for XPayr, including raw-body HMAC validation, idempotency, retries, and durable processing patterns. |

### Arc Mainnet/Testnet and agent commerce

| Repository | Purpose |
| --- | --- |
| [xpayr-agent-payments-arc-testnet](https://github.com/xpayrcom/xpayr-agent-payments-arc-testnet) | Reference flow for policy-controlled agent decisions, agent-wallet execution, Arc USDC settlement, and XPAYR reconciliation. |
| [xpayr-reconciliation-arc-testnet](https://github.com/xpayrcom/xpayr-reconciliation-arc-testnet) | Read-only Arc reconciliation reference for XPAYR payment events, cursor checkpoints, deduplication, and RPC health monitoring. |
| [xpayr-arc-testnet-examples](https://github.com/xpayrcom/xpayr-arc-testnet-examples) | XPAYR integration examples for Arc USDC checkout, transaction memos, App Kit workflows, and payment reconciliation. |

### Checkout examples

| Repository | Purpose |
| --- | --- |
| [accept-usdt-payments-example](https://github.com/xpayrcom/accept-usdt-payments-example) | Runnable server-side example for creating USDT checkout sessions with XPayr while keeping merchant API keys out of the browser. |
| [crypto-checkout-widget-example](https://github.com/xpayrcom/crypto-checkout-widget-example) | Interactive XPayr checkout widget example with secure server-side session creation and popup, redirect, and embedded checkout modes. |
| [xpayr-laravel-example](https://github.com/xpayrcom/xpayr-laravel-example) | Reference Laravel integration for creating XPayr checkout sessions, persisting payment state, and verifying webhook events safely. |

### Commerce integrations

| Repository | Purpose |
| --- | --- |
| [xpayr-woocommerce-gateway](https://github.com/xpayrcom/xpayr-woocommerce-gateway) | XPayr crypto payment gateway plugin for WooCommerce, with hosted checkout and merchant-side payment status handling. |
| [xpayr-prestashop-gateway](https://github.com/xpayrcom/xpayr-prestashop-gateway) | XPayr crypto payment gateway integration for PrestaShop, with hosted checkout and merchant order-status handling. |
| [xpayr-magento2-gateway](https://github.com/xpayrcom/xpayr-magento2-gateway) | XPayr crypto payment gateway integration for Magento 2, connecting checkout orders to secure payment sessions and status updates. |
| [xpayr-shopware6-gateway](https://github.com/xpayrcom/xpayr-shopware6-gateway) | XPayr crypto payment gateway integration for Shopware 6, with hosted checkout and order payment-state synchronization. |
| [xpayr-opencart-gateway](https://github.com/xpayrcom/xpayr-opencart-gateway) | XPayr crypto payment gateway integration for OpenCart, connecting store orders to secure hosted checkout and payment updates. |
| [xpayr-zencart-gateway](https://github.com/xpayrcom/xpayr-zencart-gateway) | XPayr crypto payment gateway integration for Zen Cart, with hosted checkout and merchant-side payment status handling. |

### More XPayr projects

| Repository | Purpose |
| --- | --- |
| [xpayr-verified-agentpay-giwa](https://github.com/xpayrcom/xpayr-verified-agentpay-giwa) | GIWA Sepolia testnet MVP for verified, policy-controlled AI agent escrow payments. |
<!-- repository-catalog:end -->

## Release channels

- npm (Official MCP Server): [`@xpayr/mcp-server`](https://www.npmjs.com/package/@xpayr/mcp-server) & [`xpayr-mcp`](https://www.npmjs.com/package/xpayr-mcp)
- Official MCP Registry: [`io.github.xpayrcom/xpayr-mcp-server`](https://registry.modelcontextprotocol.io/v0/servers?search=xpayr)
- GHCR Docker Container: `ghcr.io/xpayrcom/xpayr-mcp-server:latest`
- npm: [`@xpayr/node-sdk`](https://www.npmjs.com/package/@xpayr/node-sdk)
- npm: [`@xpayr/payment-evidence`](https://www.npmjs.com/package/@xpayr/payment-evidence)
- npm: [`@xpayr/extension-kit`](https://www.npmjs.com/package/@xpayr/extension-kit)
- Packagist: [`xpayr/xpayr-php`](https://packagist.org/packages/xpayr/xpayr-php)

## Security

Do not publish merchant secrets, webhook secrets, wallet private keys, seed phrases, or production credentials in issues or repositories. Use the `SECURITY.md` file in the affected repository for responsible disclosure instructions.
