import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
export const TransanctionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransanctionList;
