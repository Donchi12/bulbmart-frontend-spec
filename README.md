# Bulb Mart 🛒💡
### Specialized Cross-Platform E-Commerce Mobile Application for Lighting & Industrial Bulbs

Bulb Mart is a modular, high-performance mobile application engineered natively for iOS and Android platforms to handle full-cycle e-commerce retail workflows for specialized lighting fixtures and bulbs. 

The architecture is built from the ground up using React Native, designed to manage complex product catalogs, multi-variant item configurations (wattage, lumens, base types), real-time inventory checks, and mobile-native payment collections seamlessly.

---

## ⚡ Key Architectural Capabilities

*   **Native E-Commerce Core:** Full-featured marketplace pipeline including dynamic category filtering, persistent shopping cart tracking, and secure mobile checkout screens.
*   **Intelligent Multi-Variant Matrices:** Engineered dynamic state handlers capable of resolving highly specific industrial bulb configurations (voltage constraints, color temperatures, fitting types) in real-time.
*   **Advanced Global State Orchestration:** Utilizes Redux Toolkit to cleanly synchronize asynchronous app states, cart updates, and user profile data natively across layout trees.
*   **Low-Latency View Port Rendering:** Highly optimized component structures that prevent UI frame drops on lower-end mobile devices during rapid grid scrolling of heavy graphics catalogs.

---

## 🏗️ Technical Stack & System Infrastructure

*   **Mobile Core Framework:** React Native, JavaScript (ES6+), TypeScript
*   **State & Cache Layer:** Redux Toolkit, Asynchronous Local Storage Bridging
*   **UI Engine & Navigation:** React Navigation (Native Stack Protocols), Custom Core Components
*   **Data Backplane:** Supabase Data Layer, PostgreSQL, Secure Native Payment Gateway APIs

---

## 🛠️ Solved Engineering Bottlenecks

### 1. Eliminating Core Frame Drops During Rapid Catalog Grid Scrolling
*   **Challenge:** Rendering large, multi-vendor asset lists of specialized light bulb inventories with heavy high-resolution media previews caused thread blockages and layout stuttering on budget mobile screens.
*   **Solution:** Implemented aggressive structural virtualized list strategies (`FlatList` rendering optimizations) combined with dynamic mobile asset compression hooks. UI layouts decouple primary layout items from hidden structural variables, ensuring that off-screen card instances drop out of active device layout arrays immediately, keeping rendering processing speeds light.

### 2. Preventing Variant State Desynchronization across Mobile Screens
*   **Challenge:** When users toggled multiple industrial choices (e.g., changing a bulb fitting from E27 to GU10, adjusting wattage values, and updating quantities), fast UI screen switches occasionally caused local device cart views to retain wrong calculations.
*   **Solution:** Built an absolute single-source-of-truth state container inside Redux Toolkit. Variant updates flow through normalized, pure-reducer patterns that instantly push calculated state properties into local device states and database hooks, preventing layout execution mismatches across native views.
