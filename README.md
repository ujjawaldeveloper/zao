# **E-Commerce Platform**

Welcome to the **E-Commerce Platform** project! 🚀  
This is a full-fledged e-commerce platform built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js) and powered by **AWS Free Tier Services**. Designed to showcase the skills of a senior developer, this platform enables seamless interaction between buyers, sellers, and administrators with robust features and scalability.

---

## **🌟 Features**

- **User Roles**: Supports Buyers, Sellers, and Admins with distinct dashboards.
- **Authentication**: Secure login with OTP-based email authentication (via AWS SES).
- **Product Management**: Sellers can add, edit, and manage their products.
- **Order System**: Buyers can add items to the cart, place orders, and track status.
- **Admin Controls**: Admin panel to manage users, resolve tickets, and monitor platform metrics.
- **Customer Support**: Ticket-raising system for buyers to report issues.
- **Analytics**: Sales and user insights visualized via AWS QuickSight.
- **CI/CD Integration**: Automated deployments using AWS tools and GitHub Actions.

---

## **🚀 Getting Started**

Follow these steps to get the project up and running on your local machine:

### **1. Clone the Repository**
```bash
git clone https://github.com/uy-in/ecom.git
cd ecom
```

### **2. Frontend Setup**
Navigate to the frontend directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Start the development server:
```bash
npm start
```
Open http://localhost:3000 in your browser.
### **3. Backend Setup**
Navigate to the backend directory:
```bash
cd ../backend
```
Install dependencies:
```bash
npm install
```
Create a .env file in the backend folder with the following variables:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
```
Start the server:
```bash
npm run dev
```
### **4. Combined Start**
To run both frontend and backend together (optional), you can use tools like concurrently or Docker Compose.

### **5. Project Structure**
The project is structured to ensure scalability and maintainability. Structure:
```bash
ecom/
├── frontend/          # React.js for the UI
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── services/    # API interaction logic
│   │   ├── context/     # Global state management
│   │   └── ...
├── backend/           # Node.js with Express.js
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── controllers/   # Business logic
│   ├── middlewares/   # Middleware functions
│   ├── config/        # Config files (e.g., AWS setup)
│   └── ...
├── .gitignore         # Git ignore file
├── README.md          # Project documentation
└── ...
```
### **6. Live Demo**
---
- **You can access the live demo of this at **: [https://ujjawalecom.netlify.app](https://ujjawalecom.netlify.app)
---
### **7. Built With***
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js Express.js MongoDB
- **Cloud Services**: AWS (S3, SES, QuickSight, CloudWatch)
- **Authentication**: JSON Web Tokens (JWT), AWS Cognito
- **Deployment**: Netlify, AWS Elastic Beanstalk, S3, Lambda

### **Thank you for visiting!**
thank you for checking out this project! 🎉. Feel free to explore, use, and share this project. If you found it helpful or inspiring, don’t forget to give it a ⭐ on GitHub! 😊
If you have any questions, feel free to reach out or open an issue. Happy coding! 🚀

---
- **Talk to me**: [fix a meeting now](https://calendly.com/uyin/talk)
- **GitHub**: [https://github.com/uy-in](https://github.com/ujjawaldeveloper)
- **LinkedIn**: [https://www.linkedin.com/in/uyin](https://www.linkedin.com/in/ujjawaldeveloper)
- **Email**: [uy2110101@gmail.com](mailto:uy2110101@gmail.com)
---
