import React from "react";
import "./ExpenseItem.css";
import { MdDelete, MdEdit } from "react-icons/md";

const ExpenseItem = (props) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{props.expense.charge}</span>
        <span className="amount">{props.expense.amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          onClick={() => props.handleEdit(props.expense.id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          onClick={() => props.handleDelete(props.expense.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
