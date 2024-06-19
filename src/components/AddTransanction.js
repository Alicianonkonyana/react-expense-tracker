import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const AddTransanction = () => {
  return (
    <div className="AddTransaction">
      <h3>Add new Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <br />
          <input type="text" className="input-text" placeholder="Enter text" />
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
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTransanction;
