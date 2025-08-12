# Project Overview: abelia-marketplace

This document outlines the understanding of the `abelia-marketplace` project based on its file structure and contents.

## Core Technologies

*   **Backend:** Laravel (PHP)
*   **Frontend:** React (TypeScript) with Inertia.js
*   **Admin Panel:** Filament
*   **Database:** SQLite
*   **Testing:** Pest

## Database Schema Analysis

(Existing content remains the same)

## Frontend Implementation Plan

This section outlines the plan to implement the user-facing checkout flow.

### Existing Structure

The frontend (`resources/js`) has a well-organized structure:

*   **Pages:** `home`, `shop`, `product`, `about`, `auth`, and `settings` pages are already set up.
*   **Components:** A rich set of UI components (`/ui`), application-level components (`app-shell`), and page-specific components (`/home`, `/shop`) exist.
*   **Missing:** There are no dedicated pages or components for `Cart` and `Checkout` yet.

### Checkout Flow (Based on FEATURES.md)

1.  **Add to Cart:** User selects a product (and size, if applicable) and adds it to the cart.
2.  **View Cart:** User navigates to a cart page to review items.
3.  **Checkout:** User proceeds to a checkout page and fills in their shipping details.
4.  **Place Order:** Upon submission, an `Order` is created in the database with a unique invoice code.
5.  **Confirmation:** User is redirected to a success page, instructing them to send the invoice code via WhatsApp to an admin for payment processing.

### Implementation Steps

To make this flow work, we need to build both backend and frontend components.

**1. Backend (API & Logic)**

*   **Cart Management:**
    *   `POST /cart`: Route to add an item to the cart.
    *   `GET /cart`: Route to retrieve cart contents.
    *   `PUT /cart/{id}`: Route to update item quantity in cart.
    *   `DELETE /cart/{id}`: Route to remove an item from cart.
    *   `CartController.php`: To handle all cart logic.
*   **Order Placement:**
    *   `POST /checkout`: Route to process the checkout form and create an order.
    *   `CheckoutController.php`: To handle order creation logic.

**2. Frontend (UI & State)**

*   **State Management:**
    *   Implement a global state for the cart (e.g., using React Context or Zustand) to keep track of cart items across the application.
    *   This state will hold items, count, and total price.
*   **Component Development:**
    *   **Product Page:** Enhance `ProductActions.tsx` to handle size selection and include an "Add to Cart" button.
    *   **Navbar:** Update `Navbar.tsx` to include a cart icon with an item count badge.
    *   **Cart Page (New):** Create `pages/cart/page.tsx`. This page will display cart items, allow quantity changes, and show a total price.
    *   **Checkout Page (New):** Create `pages/checkout/page.tsx`. This will be a form for the user's name, address, and contact information.
    *   **Success Page (New):** Create `pages/checkout/success/page.tsx` to show the final confirmation message and invoice code.
