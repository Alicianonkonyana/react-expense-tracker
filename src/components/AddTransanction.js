import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalContext } from "../context/GlobalState";

const AddTransanction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <div className="AddTransaction">
      <h3>Add new Transaction</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="text" className="text-label">
          Text
        </label>
        <br />
        <input
          type="text"
          className="input-text"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amount" className="amount-label">
          Amount
          <br />
          (minus-expense, add-income)
        </label>
        <br />
        <input
          type="number"
          className="enter-amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button className="transaction-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransanction;
