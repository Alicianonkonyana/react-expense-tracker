import "./App.css";
import Header from "./components/Header";
import "./App.css";
import "typeface-roboto";

import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransanctionList from "./components/TransanctionList";
import AddTransanction from "./components/AddTransanction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <div className="container">
          <Balance />

          <IncomeExpense />
          <TransanctionList />
          <AddTransanction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
