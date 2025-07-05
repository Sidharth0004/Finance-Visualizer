import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-3xl font-bold text-center mb-4">💸 Personal Finance Visualizer</h1>
      <Dashboard />
    </div>
  );
}