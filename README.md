# Coffee Ordering App ☕️

A full-stack coffee-ordering web application built with **Next.js**, **React**, and **Node.js**. This app allows users to browse a coffee menu, select customizations (e.g., cup size, add-ons), and place orders. It features an optimized user experience, modular design, and efficient state management.

## Features 🚀
- Browse and order from a customizable coffee menu.
- Choose cup sizes and add-ons (milk, syrups, extra shots).
- Responsive design for a seamless experience on desktop and mobile.
- Optimized image loading with lazy loading for improved performance.
- Secure user authentication and payment processing.
- Real-time updates to the shopping cart.
- Modularized component structure for easier scalability and maintainability.

## Tech Stack 🛠️
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: REST APIs, Git, Vercel (for deployment)

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
