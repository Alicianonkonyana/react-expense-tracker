import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const AddTransanction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="AddTransaction">
      <h3>Add new Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Enter text"
            onChange={(e) => setText(e.target.value)}
          />
          <div className="form-control">
            <label htmlFor="amount">
              Amount
              <br />
              (negative-expense,positive-income)
            </label>
            <br />
            <input
              type="number"
              className="enter-amount"
              placeholder="Enter amount"
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button className="transaction-btn">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default AddTransanction;
