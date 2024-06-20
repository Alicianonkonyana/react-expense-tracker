import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);
  return (
    <div className="IncomeExpense-container">
      <div className="row">
        <div className="col-6 income">Income</div>
        <div className="col-6 expense">Expense</div>

        <div className="col-6 income-value">${income}</div>
        <div className="col-6 expense-value">${expense}</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
