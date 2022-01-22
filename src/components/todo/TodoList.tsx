import React, {useState} from "react";
import {TodoEntity} from "./TodoEntity";
import TodoItem from "./TodoItem";
import TodoAdd from "./TodoAdd";

type props = {
  todoDataArray: TodoEntity[] | undefined,
  selectDate: string | undefined,
  addTodo(text: string, endDate: string): void,
  deleteTodo(id: string): void,
  checkTodo(id: string, isDone: boolean): void
};

const TodoList = ({ todoDataArray, selectDate, addTodo, deleteTodo, checkTodo }: props) => {
  return (
    <>
      <div>
        <h4>{!selectDate ?
          "" :
          selectDate + " Todo"}</h4>
      </div>

      {/*투두 리스트*/}
      <ul className="todo-list">
        {
          !selectDate
          ? ""
          : ( todoDataArray?.map(i => {
                return i.endDate === selectDate &&
                  <TodoItem
                    todoData={i}
                    key={i.id}
                    deleteTodo={deleteTodo}
                    checkTodo={checkTodo}
                  />
              })
            )
        }
      </ul>

      {!selectDate || <TodoAdd selectDate={selectDate} addTodo={addTodo}/>}
    </>
  );
};

export default TodoList;