import CostsList from "./components/Costs/CostsList";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const costs = [
    {
      date: new Date(2020, 1 , 11),
      description: "Holodos",
      amount: 999
    },
    {
      date: new Date(2021, 2 , 12),
      description: "Chear",
      amount: 9
    },
    {
      date: new Date(2023, 3 , 13),
      description: "Table",
      amount: 55
    }
  ];

  return (
    <div className="App">
      <h1>Expense tracker App</h1>
      <NewCost />
      <CostsList costs={costs} />
    </div>
  );
}

export default App;
