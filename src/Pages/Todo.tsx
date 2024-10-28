import React, { useEffect, useState } from "react";
import { DiGitCompare } from "react-icons/di";
import TodoHeader from "../Components/TodoHeader";
import { Plus } from "lucide-react";
import SingleTask, { SingleTaskProps } from "../Components/SingleTask";
import TodoForm from "../Components/TodoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store";

const Todo = () => {
  const [openTodoForm, setOpenTodoForm] = useState(false);
  const { todos } = useSelector((state: RootState) => state.todo);
  const [filteredTodos, setFilteredTodos] = useState<SingleTaskProps[]>([]);
  const [filter, setFilter] = useState<
    "completed" | "pending" | "todo" | "all"
  >("all");
  const [all, setAll] = useState<number>(0);
  const [completed, setCompleted] = useState<number>(0);
  const [pending, setPending] = useState<number>(0);
  const [todo, setTodo] = useState<number>(0);
  const closeToDoForm = () => {
    setOpenTodoForm(false);
  };

  useEffect(() => {
    let all = 0;
    let completed = 0;
    let pending = 0;
    let todoNumber = 0;
    todos.forEach((todo) => {
      all += 1;
      if (todo.completed) {
        completed += 1;
      } else if (!todo.completed && !todo.myTodo) {
        pending += 1;
      } else if (todo.myTodo) {
        todoNumber += 1;
      }
    });
    setAll(all);
    setCompleted(completed);
    setPending(pending);
    setTodo(todoNumber);
  }, [todos]);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter((todo) =>
        filter === "all"
          ? todo
          : filter === "completed"
          ? todo.completed
          : filter === "pending"
          ? !todo.completed && !todo.myTodo
          : todo.myTodo && !todo.completed
      );
      setFilteredTodos(filteredTodos);
    }
  }, [todos, filter]);

  return (
    <div
      className="p-6 flex flex-col gap-3 overflow-y-auto custom-scrollbar"
      style={{ maxHeight: "calc(100vh - 80px)" }}
    >
      <TodoHeader />
      <div className="flex gap-3 flex-wrap sm:flex-nowrap justify-between p-4 bg-card dark:bg-card-dark rounded-[16px]">
        <div className="flex gap-4 flex-wrap sm:flex-nowrap items-center justify-between sm:justify-normal">
          <div
            className={`flex text-sm gap-2 items-center font-semibold ${
              filter === "all" ? "text-primary" : "text-description"
            }`}
          >
            <p onClick={() => setFilter("all")} className="cursor-pointer">
              All Tasks
            </p>
            <div className="w-6 h-6 flex items-center justify-center bg-background dark:bg-background-dark rounded-[8px]">
              {all}
            </div>
          </div>
          <div
            className={`flex text-sm gap-2 items-center font-semibold ${
              filter === "todo" ? "text-primary" : "text-description"
            }`}
          >
            <p onClick={() => setFilter("todo")} className="cursor-pointer">
              To do
            </p>
            <div className="w-6 h-6 flex items-center justify-center bg-background dark:bg-background-dark rounded-[8px]">
              {todo}
            </div>
          </div>
          <div
            className={`flex text-sm gap-2 items-center font-semibold ${
              filter === "pending" ? "text-primary" : "text-description"
            }`}
          >
            <p onClick={() => setFilter("pending")} className="cursor-pointer">
              In Progress
            </p>
            <div className="w-6 h-6 flex items-center justify-center bg-background dark:bg-background-dark rounded-[8px]">
              {pending}
            </div>
          </div>
          <div
            className={`flex text-sm gap-2 items-center font-semibold ${
              filter === "completed" ? "text-primary" : "text-description"
            }`}
          >
            <p
              onClick={() => setFilter("completed")}
              className="cursor-pointer"
            >
              Completed
            </p>
            <div className="w-6 h-6 flex items-center justify-center bg-background dark:bg-background-dark rounded-[8px]">
              {completed}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between sm:justify-normal w-full sm:w-auto">
          <button className="flex items-center max-w-32 sm:max-w-max text-sm text-description font-semibold gap-2 px-2 py-[6px] flex-grow border-[1px] border-description">
            <DiGitCompare size={16} className="rotate-90" />
            <p>Filter & Sort</p>
          </button>
          <button
            onClick={() => setOpenTodoForm(true)}
            className="flex items-center text-sm text-description font-semibold gap-2 px-2 py-1 border-[1px] border-description"
          >
            <Plus className="w-[20px] cursor-pointer" strokeWidth={2.2} />
            <p>New Task</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-5">
        {filteredTodos.length > 0 &&
          filteredTodos.map((todo) => (
            <SingleTask
              key={todo.id}
              completed={todo.completed}
              id={todo.id}
              myTodo={todo.myTodo}
              todo={todo.todo}
              closeTodoForm={closeToDoForm}
            />
          ))}
      </div>
      {filteredTodos.length === 0 && (
        <p className="text-center text-lg font-semibold">
          {filter === "all"
            ? "You have no todos !!"
            : `You have no ${filter} todos !!`}
        </p>
      )}
      {openTodoForm && <TodoForm closeTodoForm={closeToDoForm} />}
    </div>
  );
};

export default Todo;
