# Bulb Mart

### React Native E-Commerce Application — Architecture Case Study

Bulb Mart is a mobile e-commerce application for lighting products and bulbs. The product covers catalog browsing, product variants, cart flows and checkout-oriented interactions.

The production source is private. This repository documents the frontend engineering approach.

## Core Stack

**Mobile:** React Native  
**Language:** TypeScript, JavaScript  
**State:** Redux Toolkit  
**Navigation:** React Navigation  
**Backend:** Supabase / PostgreSQL  
**Storage:** Local device storage  
**Payments:** Native payment gateway integration

## Engineering Challenges

### Product variants

Lighting products can have multiple attributes such as wattage, fitting type, voltage and color temperature. The frontend uses normalized variant state so selections remain consistent through the cart flow.

### Catalog rendering

Image-heavy product catalogs require careful list rendering and asset loading. Virtualized lists and appropriate image-loading strategies help limit unnecessary work for off-screen content.

### Cart state

Cart calculations and product selections need a single source of truth. Redux Toolkit provides a centralized state model for quantities, variants and derived cart information.

### Mobile network conditions

Mobile users may experience variable network quality. Local state and cached data can keep selected interactions responsive when connectivity is inconsistent.

## Simplified Flow

```text
Catalog
  ↓
Product
  ↓
Variant Selection
  ↓
Normalized Cart State
  ↓
Checkout
  ↓
Payment / Order API
```

## Private Production Code

The production source is private. This public case study focuses on frontend architecture and engineering decisions.

