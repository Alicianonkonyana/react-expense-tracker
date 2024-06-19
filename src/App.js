import "./App.css";
import Header from "./components/Header";
import "./App.css";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransanctionList from "./components/TransanctionList";
import AddTransanction from "./components/AddTransanction";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Balance />

        <IncomeExpense />
        <TransanctionList />
        <AddTransanction />
      </div>
    </div>
  );
}

export default App;
