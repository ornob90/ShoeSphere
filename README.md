# ShoeSphere

## Description
This is a Full stack E-Commerce website built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The platform provides a secure authentication system, efficient product exploration, shopping cart management,  a seamless checkout process with stripe payment system and ADMIN DASHBOARD.
## Live Link
```
   shoesphere-3804a.firebaseapp.com
```
## Server Side

```
   https://github.com/ornob90/shoesphere-server
```

## Diagram

![Diagram](https://raw.githubusercontent.com/ornob90/ornob90/main/image_2023-12-10_190029651.png)

## Features
- **Authentication:**
  - Gmail and Email/Password authentication system.
  - Proper handling of invalid input during authentication.
  - Implementation of a private route system, ensuring users must log in to access private pages.

- **Product Exploration:**
  - Dynamic carousels on the home page featuring various brands and newly added products.

- **Product Management:**
  - Browse products with pagination and search functionality on the product details page.
  - Utilize parallel filtering to narrow down options by brand, availability, price range, and gender.

- **Shopping Cart:**
  - Add products to the cart.
  - Manage items in the cart, adjusting quantities and removing unwanted items.
  - Receive a summary of the total product price in the cart.

- **Payment System:**
  - Seamless completion of purchases with the integrated Stripe payment system.
  - Confirm personal information and address details during the checkout process.

- **User Dashboard (User Role):**
  - **Account Management:**
    - Update personal information such as name, email, and address.
  - **Wishlist Management:**
    - View bookmarked products and manage the wishlist.
  - **Order History:**
    - Review order history, including transaction details and amounts.

- **Admin Dashboard (Admin Role):**
  - **User Management:**
    - View and manage user accounts.
  - **Product Management:**
    - Add, delete, and modify product listings.
  - **Order Management:**
    - Mark orders as delivered.
    - View a sales summary.

- **Responsive Design:**
  - Enjoy a seamless experience across various devices.

## Admin Credentials
- **Username:** admin@gmail.com
- **Password:** Admin1200,()

## Challenges
- Overcame challenges related to [Highlight specific challenges during development].

## Technologies Used
- MERN Stack (MongoDB, Express.js, React.js, Node.js)
- Firebase Authentication (Email, Password, Gmail login)
- Stripe Payment Integration

## How to Run Locally
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure environment variables for MongoDB, Firebase, and Stripe.
4. Run the development server using `npm start`.


