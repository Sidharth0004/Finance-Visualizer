import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addTransaction, getBudgets } from "../services/api";

export default function TransactionForm() {
  const [form, setForm] = useState({
    category: "",
    amount: "",
    type: "expense",
    description: "",
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const res = await getBudgets();
        const budgets = Array.isArray(res.data) ? res.data : [];
        const uniqueCategories = [...new Set(budgets.map((b) => b.category))];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    };

    fetchBudgets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction({
        ...form,
        amount: Number(form.amount),
        date: new Date(),
      });
      location.reload();
    } catch (err) {
      console.error("Failed to add transaction:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Add Transaction</h2>

      <select
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      >
        <option value="" disabled>Select Category</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <Input
        className="mt-2"
        placeholder="Amount"
        type="number"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        required
      />

      <Input
        className="mt-2"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />

      <select
        className="mt-2 w-full p-2 border rounded"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <Button className="mt-4 w-full" type="submit">
        Add
      </Button>
    </form>
  );
}
