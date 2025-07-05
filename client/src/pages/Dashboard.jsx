import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import BudgetForm from "../components/BudgetForm";
import BudgetList from "../components/BudgetList";
import Charts from "../components/Charts";

export default function Dashboard() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <TransactionForm />
        <TransactionList />
      </div>
      <div>
        <BudgetForm />
        <BudgetList />
        <Charts />
      </div>
    </div>
  );
}