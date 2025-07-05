import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { addBudget } from "../services/api";
import { toast } from "sonner"; // Optional: for user feedback

export default function BudgetForm() {
  const [form, setForm] = useState({
    category: "",
    amount: "",
    month: new Date().toISOString().slice(0, 7), // Default to current month
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      amount: Number(form.amount),
    };

    try {
      await addBudget(payload);
      toast.success("Budget added successfully");
      location.reload(); // Optional: better to update state than reload
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to add budget");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-6 space-y-3">
      <h2 className="text-xl font-semibold">Add Budget</h2>

      <Input
        placeholder="Category"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <Input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <Input
        type="month"
        placeholder="Month"
        value={form.month}
        onChange={(e) => setForm({ ...form, month: e.target.value })}
      />

      <Button type="submit" className="w-full">Add</Button>
    </form>
  );
}
