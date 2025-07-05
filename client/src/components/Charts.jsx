import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getTransactions, getBudgets } from "../services/api";

const COLORS = ["#4ade80", "#60a5fa", "#facc15", "#f87171", "#a78bfa"];

export default function Charts() {
  const [budgets, setBudgets] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getBudgets().then(res => setBudgets(res.data));
    getTransactions().then(res => setTransactions(res.data));
  }, []);

  const pieData = budgets.map(b => {
    const spent = transactions.filter(tx => tx.category === b.category && tx.type === "expense").reduce((sum, tx) => sum + tx.amount, 0);
    return { name: b.category, value: spent };
  });

  const barData = budgets.map(b => {
    const spent = transactions.filter(tx => tx.category === b.category && tx.type === "expense").reduce((sum, tx) => sum + tx.amount, 0);
    return { category: b.category, Budget: b.amount, Spent: spent };
  });

  return (
    <div className="bg-white mt-6 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">📊 Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={barData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Budget" fill="#4ade80" />
          <Bar dataKey="Spent" fill="#60a5fa" />
        </BarChart>
      </ResponsiveContainer>

      <h2 className="text-xl font-semibold mt-6 mb-2">🧩 Category Breakdown</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70}>
            {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}