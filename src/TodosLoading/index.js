import React from "react";
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <div className="LoadingTodo-item">
        <div className="LoadingTodo-icon"></div>
        <div className="LoadingTodo-text"></div>
        <div className="LoadingTodo-icon"></div>
      </div>
      <div className="LoadingTodo-item">
        <div className="LoadingTodo-icon"></div>
        <div className="LoadingTodo-text"></div>
        <div className="LoadingTodo-icon"></div>
      </div>
      <div className="LoadingTodo-item">
        <div className="LoadingTodo-icon"></div>
        <div className="LoadingTodo-text"></div>
        <div className="LoadingTodo-icon"></div>
      </div>
    </div>
  );
}

export { TodosLoading };