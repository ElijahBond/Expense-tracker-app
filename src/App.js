import { useState } from "react";
import CostsList from "./components/Costs/CostsList";
import NewCost from "./components/NewCost/NewCost";

let INITIAL_COSTS = [
  {
    date: new Date(2020, 1 , 11),
    description: "Holodos",
    amount: 999
  },
  {
    date: new Date(2021, 2 , 12),
    description: "Chair",
    amount: 9
  },
  {
    date: new Date(2023, 3 , 13),
    description: "Table",
    amount: 55
  }
];

function App() {

  const [ costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = ({ label, amount, data }) => {
    let newElement = {
      date: new Date(data),
      description: label,
      amount
    }

    setCosts(prevCosts => {
      return [newElement, ...prevCosts]
    })
  }

  return (
    <div className="App">
      <h1>Expense tracker App</h1>
      <NewCost onCostHandler={addCostHandler} />
      <CostsList costs={costs} />
    </div>
  );
}

export default App;
