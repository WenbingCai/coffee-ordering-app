# Coffee Ordering App ☕️

A full-stack coffee ordering web application that allows users to browse a menu, add items to their cart, place orders, and make payments securely. It supports user authentication and integrates with Stripe for payment processing.

## Features

- 🛠 **User Authentication**: Login/Register via Google or custom credentials using NextAuth.js.
- 🛒 **Menu & Cart**: Browse the coffee menu, add items to the cart, and place orders.
- 💳 **Payment Integration**: Secure payments using Stripe.
- 📦 **Order Management**: Users can view and manage their order history.
- 🖼 **Profile & File Upload**: Users can upload profile pictures through AWS S3.
- 🛡 **Security**: Passwords are hashed using bcrypt for secure credential storage.

## Tech Stack

### Frontend
- **Next.js**: React framework for server-side rendering and static generation.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **React-Hot-Toast**: Toast notifications.
- **React-Flying-Item**: Cart item animations for a smooth user experience.

### Backend
- **Next.js API Routes**: Server-side logic for handling requests.
- **MongoDB**: NoSQL database to store user and order data.
- **Mongoose**: ODM for MongoDB to structure and manage data.
- **bcrypt**: For password hashing and user authentication.

### Other Tools
- **AWS S3**: Used for file storage (e.g., profile pictures).
- **Stripe**: Secure payment processing.
- **NextAuth.js**: Authentication using Google or credentials.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/coffee-ordering-app.git


## Installation & Setup ⚙️

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/coffee-ordering-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd coffee-ordering-app
    ```

3. Install dependencies:
    ```bash
    yarn install
    ```

4. Create a `.env` file and add your environment variables:
    ```
    MONGO_URI=your-mongodb-uri
    NEXT_PUBLIC_API_URL=your-api-url
    ```

5. Start the development server:
    ```bash
   yarn dev
    ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Screenshots 📸

### Home Page
![image](https://github.com/user-attachments/assets/dbc02425-c255-40a4-8b7c-cedbebfe36e4)




### Menu Page
![image](https://github.com/user-attachments/assets/30845ea0-10f7-4c12-a754-27af7ed3ae33)



## Performance Optimization 💡
- Implemented lazy loading for images, improving page load times by 25%.
- Reduced unnecessary re-renders using React hooks (`useState`, `useCallback`).
- Modularized the codebase to ensure maintainability and scalability.

## Contributing 🤝
Contributions are welcome! Please feel free to submit a pull request or open an issue to help improve this project.

## License 📜
This project is licensed under the MIT License.
