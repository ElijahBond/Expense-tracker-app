import CostItem from "./components/CostItem";
import CostsList from "./components/CostsList";

function App() {

  const costs = [
    {
      date: new Date(2020, 1 , 11),
      description: "Holodos",
      amount: 999
    },
    {
      date: new Date(2021, 2 , 12),
      description: "chear",
      amount: 9
    },
    {
      date: new Date(2023, 3 , 13),
      description: "table",
      amount: 55
    },
  ];

  return (
    <div className="App">
      <h1>Expense tracker App</h1>
      <CostsList costs={costs} />
    </div>
  );
}

export default App;
