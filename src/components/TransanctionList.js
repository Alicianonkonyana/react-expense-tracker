import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TransanctionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li className="minus">
            {transaction.text} <span>-$400</span>{" "}
            <button className="delete-btn">x</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransanctionList;
