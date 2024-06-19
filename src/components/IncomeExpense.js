import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const IncomeExpense = () => {
  return (
    <div className="IncomeExpense-container">
      <div className="row">
        <div className="col-6">Income</div>
        <div className="col-6">Expense</div>
      </div>
      <div className="row">
        <div className="col-6">+$0.00</div>
        <div className="col-6">-$0.00</div>
      </div>
    </div>
  );
};

export default IncomeExpense;
