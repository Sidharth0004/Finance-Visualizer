

import axios from "axios";






// const API = axios.create({ baseURL: "http://localhost:5000/api" });
const API = axios.create({ baseURL: "https://finance-visualizer-backend-production.up.railway.app/api" });


export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transactions", data);
export const deleteTransaction = (id) => API.delete(`/transactions/${id}`);

export const getBudgets = () => API.get("/budgets");
export const addBudget = (data) => API.post("/budgets", data);
export const updateBudget = (id, data) => API.patch(`/budgets/${id}`, data);
export const deleteBudget = (id) => API.delete(`/budgets/${id}`);
