# FinEase - Personal Finance Management Web Application

**Live Site:** [Add your deployed URL here - e.g., https://finease.netlify.app](https://finease.netlify.app)

## 📱 Overview

FinEase is a comprehensive personal finance management web application that empowers users to take control of their financial lives. Track income, manage expenses, visualize spending patterns, and achieve your financial goals with an intuitive and beautiful interface.

## ✨ Key Features

- **📊 Financial Dashboard**: Get an at-a-glance overview of your total balance, income, and expenses with real-time calculations from your database
- **💰 Transaction Management**: Add, view, update, and delete income and expense transactions with detailed categorization and date tracking
- **📈 Advanced Financial Reports**: Visualize your financial data through interactive charts including pie charts for category breakdowns and line charts for income vs. expense trends
- **🎨 Light/Dark Mode**: Toggle between light and dark themes for comfortable viewing in any environment
- **🔐 Secure Authentication**: Email/password and Google OAuth authentication with persistent login sessions - stay logged in even after page reloads
- **📱 Fully Responsive Design**: Seamlessly works on mobile, tablet, and desktop devices with a mobile-first approach

## 🛠 Technology Stack

### Frontend

- **React 19.2** - UI library
- **Vite 7.2** - Build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **DaisyUI 5.4** - Component library for Tailwind
- **React Router 7.9** - Client-side routing
- **Recharts 3.4** - Data visualization library
- **Firebase 12.5** - Authentication service
- **SweetAlert2 11.26** - Beautiful modal alerts

### Backend

- **Node.js + Express** - Server runtime
- **MongoDB** - Database

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env.local` with your Firebase credentials
4. Start dev server: `npm run dev`
5. Build for production: `npm run build`

## 📂 Project Structure

```
src/
├── Component/           # Reusable UI components
├── Layout/             # Page layouts and sections
├── Provider/           # Authentication context
├── Router/             # Route definitions
├── Firebase/           # Firebase configuration
└── assets/             # Static files
```

## 🔒 Security Features

- Firebase Authentication with email/password and OAuth
- Private routes with automatic redirection
- Password validation (uppercase, lowercase, min 6 chars)
- Read-only user fields in forms
- Environment variables for sensitive data

## 🤝 Contributing

Contributions are welcome! Please submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

---

**GitHub Repository:** [Abdullah881485/Ph-A-10-Client](https://github.com/Abdullah881485/Ph-A-10-Client)
