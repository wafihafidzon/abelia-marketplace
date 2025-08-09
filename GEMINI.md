# Project Overview: abelia-marketplace

This document outlines the understanding of the `abelia-marketplace` project based on its file structure and contents.

## Core Technologies

*   **Backend:** Laravel (PHP)
*   **Frontend:** React (TypeScript) with Inertia.js
*   **Admin Panel:** Filament
*   **Database:** SQLite
*   **Testing:** Pest

## Key Features

The application appears to be an e-commerce marketplace with the following features:

*   **Product Management:** Creating, updating, and deleting products.
*   **Categorization:** Organizing products into categories.
*   **Order Management:** Processing and tracking customer orders.
*   **Shopping Cart:** Allowing users to add products to a cart.
*   **Wishlist:** Enabling users to save products for later.
*   **Product Ratings:** Allowing users to rate products.
*   **User Authentication:** User registration and login.
*   **Roles and Permissions:** Differentiating user roles (e.g., admin, user).

## Project Structure

*   **`app/`**: Contains the core application logic, including Models, Controllers, and Filament Resources.
*   **`config/`**: Holds the application's configuration files.
*   **`database/`**: Includes database migrations, seeders, and the SQLite database file.
*   **`resources/js/`**: Contains the React frontend code, including pages, components, and layouts.
*   **`routes/`**: Defines the application's web and API routes.
*   **`tests/`**: Contains the application's tests written with Pest.

## Database Schema Analysis

Based on the migration files, here is a summary of the current database structure:

*   **`products`**: Stores core product information.
    *   `name`, `description`, `price`, `stock`, `category_id`
    *   Contains a `size` column (added via migration `2025_07_30_120252_add_size_product_table.php`) which is not ideal for managing multiple sizes with different prices and stocks.

*   **`categories`**: For product categories.
*   **`product_images`**: For product imagery.
*   **`users`**: For user data.
*   **`orders`, `order_items`, `order_logs`**: For handling the order process.
*   **`carts`**, **`wishlists`**, **`rating`**: For e-commerce features.
*   **Permission Tables**: From Spatie/laravel-permission.

### Recommended Schema Improvement for Product Sizes

To properly support products with multiple sizes, where each size has a distinct price and stock, the following approach is recommended:

1.  **Remove the `size` column** from the `products` table. The `price` and `stock` columns on this table can act as a "base" or "default" value.
2.  **Create a new table `product_sizes`** with the following structure:
    *   `id`: Primary Key
    *   `product_id`: Foreign key linking to `products.id`.
    *   `size`: String or Enum (e.g., 'S', 'M', 'L').
    *   `price`: The specific price for this size variant.
    *   `stock`: The specific stock count for this size variant.

This normalized structure is more scalable, flexible, and follows database design best practices.