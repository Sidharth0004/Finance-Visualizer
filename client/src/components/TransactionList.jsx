import { useEffect, useState } from "react";
import { getTransactions, deleteTransaction } from "../services/api";
import { Button } from "@/components/ui/button";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => { getTransactions().then(res => setTransactions(res.data)) }, []);

  return (
    <div className="bg-white mt-4 p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      {transactions.map(tx => (
        <div key={tx._id} className="flex justify-between items-center py-1 border-b">
          <span>{tx.category} - ₹{tx.amount} ({tx.type})</span>
          <Button variant="destructive" size="sm" onClick={() => { deleteTransaction(tx._id).then(() => location.reload()); }}>Delete</Button>
        </div>
      ))}
    </div>
  );
}
