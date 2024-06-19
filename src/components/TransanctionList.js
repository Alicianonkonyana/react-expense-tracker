import React from "react";

const TransanctionList = () => {
  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul>
        <li className="minus">
          Cash <span>-$400</span> <button className="delete-btn">x</button>
        </li>
      </ul>
    </div>
  );
};

export default TransanctionList;
