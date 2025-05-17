# Streetmerchant Memory Bank

This document serves as a quick reference and summary of key knowledge about the Streetmerchant project, based on the provided code analysis.

**Core Functionality:** Stock checking application using Puppeteer for web automation.

**Key Directories:**

-   [`src/`](src/): Contains the main application logic.
-   [`src/store/`](src/store/): Stock checking logic and store implementations.
-   [`src/messaging/`](src/messaging/): Notification handling.

**Main Components:**

-   **Stores (`src/store/model/`)**: Implementations for checking stock on specific websites using CSS selectors (`Labels`) and custom logic.
-   **Lookup (`src/store/lookup.ts`)**: Orchestrates the stock checking process, iterates through stores, uses Puppeteer, applies store logic, and triggers notifications.
-   **Browser Management (`src/browser.ts`)**: Manages Puppeteer instances, profiles, proxies, and page settings.
-   **Configuration (`src/config.ts`)**: Handles application settings from environment variables.
-   **Messaging (`src/messaging/notification.ts`)**: Centralized function for sending notifications (Discord, Email, etc.).
-   **Proxy Management (`src/proxy.ts`)**: Parses and rotates proxies.
-   **Ad Blocker (`src/adblocker.ts`)**: Integrates a third-party ad blocker.
-   **Handlers (`src/handlers.ts`)**: Intercepts Puppeteer network requests/responses.

**Key Interactions:**

-   Main loop calls `lookup` for each store.
-   `lookup` uses Browser Management to get a Puppeteer instance.
-   Browser Management integrates Proxy Management and Ad Blocker, and uses Handlers.
-   `lookup` uses Store-specific logic to check stock.
-   If stock is found, `lookup` calls Messaging.

**Significant Patterns:**

-   Module-based organization.
-   Strategy Pattern for store implementations.
-   Configuration-driven behavior.
-   Reliance on Browser Automation (Puppeteer).
-   Proxy Rotation for resilience.