import { useEffect, useState } from "react";
import { getBudgets, deleteBudget, updateBudget } from "../services/api";
import { Button } from "@/components/ui/button";

export default function BudgetList() {
  const [budgets, setBudgets] = useState([]);
  useEffect(() => { getBudgets().then(res => setBudgets(res.data)) }, []);

  return (
    <div className="bg-white mt-4 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Budgets</h2>
      {budgets.map(b => (
        <div key={b._id} className="flex justify-between items-center py-1 border-b">
          <span>{b.category} - ₹{b.amount}</span>
          <div className="flex gap-2">
            <Button size="sm" onClick={() => {
              const newAmount = prompt("Enter new amount:", b.amount);
              if (newAmount) updateBudget(b._id, { amount: Number(newAmount) }).then(() => location.reload());
            }}>Edit</Button>
            <Button variant="destructive" size="sm" onClick={() => deleteBudget(b._id).then(() => location.reload())}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  );
}