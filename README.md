# Book Shop B4A2V1

Welcome to the Book Shop B4A2V1! This is a platform where users can manage a collection of books and place orders. It uses Express.js with TypeScript, integrated with MongoDB via Mongoose for managing products (books) and orders. The app supports various operations like adding, updating, deleting books, placing orders, and tracking revenue.

##Key Features:

- **Manage Books:** Users can create, update, retrieve, and delete books.
- **Search Books:** Books can be searched by title, author, or category.
- **Order Books:** Users can place orders for books, which will automatically update inventory.
- **Revenue Tracking:** The system tracks and calculates total revenue from all orders.

## Getting Started Locally

- **Clone this repository:** `https://github.com/Sazz07/Sazz07-level-2-batch-4-assignment-2-set-1.git`
- **Install the necessary dependency:** `npm install`
- **Create env file:** Create a `.env` file.
- **Add database uri:** Add `DATABASE_URL` and `PORT` with your database uri in `.env` file.
- **Run project:** Finally run the project using this command `npm run dev`

## Deployed URL

https://book-store-lyart-eta.vercel.app/

## API Documentation

Below are the key endpoints of the application to manage books and orders.

## Endpoints

### Products (Books)

#### 1. Create a New Book

- **Endpoint:** `/api/products`
- **Method:** `POST`
- **Body:**

```
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "price": 10,
  "category": "Fiction",
  "description": "A story about the American dream.",
  "quantity": 100,
  "inStock": true
}
```

- **Response:**

```
{
  "message": "Book created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z",
  }
}
```

---

#### 2. Get All Books

- **Endpoint:** `/api/products`
- **Method:** `GET`
- **Query:** `/api/products?searchTerm=Fiction`

- **Response:**

```
{
    "message": "Book retrieved successfully",
    "success": true,
    "data": [
        {
            "_id": "67436332f4b193c3a2670fe6",
            "title": "JASDASD",
            "author": "F. Scott Fitzgerald",
            "price": 153435,
            "category": "Fiction",
            "description": "A story about the American dream.",
            "quantity": 25,
            "inStock": true,
            "createdAt": "2024-11-24T17:32:34.333Z",
            "updatedAt": "2024-11-24T18:24:14.891Z"
        }
    ]
}
```

---

#### 3. Get a Specific Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `GET`

- **Response:** The details of a specific book by ID.

```
{
  "message": "Book retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 10,
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 100,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z",
  }
}
```

---

#### 4. Update a Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `PUT`
- **Body:**

```
{
  "price": 15,
  "quantity": 25,
}
```

- **Response:** Success message and updated book details.

```
{
  "message": "Book updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "price": 15,  // Price updated
    "category": "Fiction",
    "description": "A story about the American dream.",
    "quantity": 25,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z",
  }
}
```

---

#### 5. Delete a Book

- **Endpoint:** `/api/products/:productId`
- **Method:** `DELETE`
- **Response:** Success message confirming the book has been deleted.

```
{
  "message": "Book deleted successfully",
  "status": true,
  "data": {}
}
```

---

#### Orders (Book)

#### 1. Order a Book

- **Endpoint:** `/api/orders`
- **Method:** `POST`
- **Body:**

```
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 30
}
```

- **Response:**

```
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 30,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z",
  }
}
```

---

#### 2. Calculate Revenue from Orders

- **Endpoint:** `/api/orders/revenue`
- **Method:** `GET`
- **Response:**

```
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 450
  }
}
```
