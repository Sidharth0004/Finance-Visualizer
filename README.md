# 💸 Personal Finance Visualizer

A simple and interactive web app to track your personal finances with powerful visualizations. Built using **React**, **shadcn/ui**, **Recharts**, and **MongoDB**.

> 🚫 No authentication — fully open and ready to use!

---

## 📌 Features

### ✅ Stage 1: Transaction Tracking
- Add, edit, delete transactions (with amount, category, date)
- List view of all transactions
- Monthly expenses bar chart
- Form validation for input fields

### ✅ Stage 2: Categories
- Predefined categories (e.g., Food, Rent, Travel, etc.)
- Pie chart showing category-wise expense distribution
- Summary dashboard:
  - Total expenses
  - Most recent transactions
  - Category breakdown

### ✅ Stage 3: Budgeting
- Set monthly budgets per category
- Budget vs Actual bar chart
- Simple spending insights (overspent or under budget)

---

## 🖥️ Tech Stack

- **Frontend:** React + Vite, Tailwind CSS, shadcn/ui
- **Charts:** Recharts
- **Backend:** Node.js + Express
- **Database:** MongoDB (Mongoose)
- **State & Form:** React hooks and controlled components

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/Sidharth0004/Finance-Visualizer.git
cd Finance-Visualizer

 2. Install Dependencies
cd client
npm install

cd ../server
npm instal

3. Run the App

# In /client
npm run dev

# In /server (use nodemon for auto-reload)
npm run start
