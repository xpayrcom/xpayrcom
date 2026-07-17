# XPayr

XPayr is non-custodial crypto payment infrastructure for merchants, platforms, and agent-driven commerce. Build hosted checkout, payment links, embedded widgets, API integrations, webhooks, settlement routing, and verifiable payment evidence without giving XPayr custody of merchant funds.

[![Node SDK](https://img.shields.io/npm/v/%40xpayr%2Fnode-sdk?label=Node%20SDK)](https://www.npmjs.com/package/@xpayr/node-sdk)
[![Payment Evidence](https://img.shields.io/npm/v/%40xpayr%2Fpayment-evidence?label=Payment%20Evidence)](https://www.npmjs.com/package/@xpayr/payment-evidence)
[![PHP SDK](https://img.shields.io/packagist/v/xpayr/xpayr-php?label=PHP%20SDK)](https://packagist.org/packages/xpayr/xpayr-php)

## Build with XPayr

- Create testnet payment sessions with server-side API keys.
- Send customers to hosted checkout or embed the checkout widget.
- Verify webhook signatures before updating orders or balances.
- Reconcile payment intent, on-chain receipt, platform fee, and merchant settlement.
- Use Arc Testnet references for agent-wallet payments, evidence anchoring, and reconciliation experiments.

[Developer Hub](https://xpayr.com/developers) | [API Documentation](https://xpayr.com/doc-api) | [Testnet Registration](https://xpayr.com/merchant/register.php) | [Security](https://xpayr.com/security)

## Official repositories

<!-- repository-catalog:start -->
### SDKs and packages

| Repository | Purpose |
| --- | --- |
| [xpayr-node-sdk](https://github.com/xpayrcom/xpayr-node-sdk) | Official Node.js SDK for creating XPayr payment sessions, verifying webhooks, and integrating direct-to-wallet crypto checkout. |
| [xpayr-php-sdk](https://github.com/xpayrcom/xpayr-php-sdk) | Official PHP SDK for XPayr payment sessions, merchant operations, webhook verification, and server-side crypto checkout integrations. |
| [xpayr-payment-evidence](https://github.com/xpayrcom/xpayr-payment-evidence) | Canonical payment-evidence envelopes, deterministic hashing, and Merkle inclusion proofs for independently verifiable XPayr receipts. |

### API and developer resources

| Repository | Purpose |
| --- | --- |
| [xpayr-docs](https://github.com/xpayrcom/xpayr-docs) | Official XPayr developer documentation for payment sessions, webhooks, testnet checkout, and agent-commerce integrations. |
| [xpayr-doc-api](https://github.com/xpayrcom/xpayr-doc-api) | Production-oriented XPayr Merchant API reference covering authentication, payment sessions, webhook delivery, and balance reporting. |
| [xpayr-api-examples](https://github.com/xpayrcom/xpayr-api-examples) | Production-oriented examples for XPayr payment sessions, hosted checkout, webhooks, and testnet-first merchant integrations. |
| [xpayr-postman-collection](https://github.com/xpayrcom/xpayr-postman-collection) | Official Postman collection and environments for exploring the XPayr Merchant API and testnet payment lifecycle. |
| [xpayr-webhook-examples](https://github.com/xpayrcom/xpayr-webhook-examples) | Secure webhook verification examples for XPayr, including raw-body HMAC validation, idempotency, retries, and durable processing patterns. |

### Arc Testnet and agent commerce

| Repository | Purpose |
| --- | --- |
| [xpayr-agent-payments-arc-testnet](https://github.com/xpayrcom/xpayr-agent-payments-arc-testnet) | Reference flow for policy-controlled agent decisions, agent-wallet execution, Arc Testnet USDC settlement, and XPAYR reconciliation. |
| [xpayr-reconciliation-arc-testnet](https://github.com/xpayrcom/xpayr-reconciliation-arc-testnet) | Read-only Arc Testnet reconciliation reference for XPAYR payment events, cursor checkpoints, deduplication, and RPC health monitoring. |
| [xpayr-arc-testnet-examples](https://github.com/xpayrcom/xpayr-arc-testnet-examples) | XPAYR integration examples for Arc Testnet USDC checkout, transaction memos, App Kit workflows, and payment reconciliation. |

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
<!-- repository-catalog:end -->

## Release channels

- npm: [`@xpayr/node-sdk`](https://www.npmjs.com/package/@xpayr/node-sdk)
- npm: [`@xpayr/payment-evidence`](https://www.npmjs.com/package/@xpayr/payment-evidence)
- Packagist: [`xpayr/xpayr-php`](https://packagist.org/packages/xpayr/xpayr-php)

## Security

Do not publish merchant secrets, webhook secrets, wallet private keys, seed phrases, or production credentials in issues or repositories. Use the `SECURITY.md` file in the affected repository for responsible disclosure instructions.

