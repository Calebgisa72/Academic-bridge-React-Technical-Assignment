import React, { useState, useRef, useEffect } from 'react';
import { EllipsisVertical, Eraser, MessageCircleMore } from 'lucide-react';
import { FaRegEdit } from 'react-icons/fa';
import avatar1 from '../assets/Avatar1.png';
import avatar2 from '../assets/Avatar4.png';
import avatar3 from '../assets/Avatar3.png';
import ConfirmDeletePopup from '../Popups/ConfirmDeletePopup';
import TodoForm from './TodoForm';
import { toast } from 'react-hot-toast';
import { setTodos } from '../Redux/Reducers/todoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';

const allProfiles = [avatar1, avatar2, avatar3];

export interface SingleTaskProps {
  closeTodoForm?: () => void;
  id: string | number;
  todo: string;
  completed: boolean;
  myTodo?: boolean;
}

const SingleTask = ({ id, todo, completed, myTodo }: SingleTaskProps) => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleCloseTodoForm = () => {
    setIsEditing(false);
  };

  const handleDeleteTodo = (id: number | string) => {
    const updatedTodos = todos.filter((todo) => todo.id != id);
    dispatch(setTodos(updatedTodos));
    toast.success('Todo Deleted Successfully !');
  };

  return (
    <div className="flex w-[90%] sm:w-[255px] bg-card dark:bg-card-dark rounded-[16px] p-3 flex-col gap-3">
      <div className="flex justify-between">
        <div
          className={`${
            completed
              ? 'bg-completed-back text-completed'
              : myTodo
                ? 'bg-toDo-back text-toDo'
                : 'bg-inProgress-back text-inProgress'
          } px-[6px] py-[3px] rounded-[8px] text-sm font-semibold`}
        >
          {completed ? 'Completed' : myTodo ? 'To do' : 'In Progress'}
        </div>
        <div className="relative">
          <EllipsisVertical
            data-testid="actionsButton"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="w-[21px] cursor-pointer"
          />
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute p-3 right-2 flex flex-col rounded-[8px] bg-background dark:bg-background-dark border-[2px] border-description gap-2"
            >
              <div
                onClick={() => handleEditTodo()}
                className="flex gap-3 items-center cursor-pointer"
              >
                <FaRegEdit size={18} className="text-primary" />
                <p>Edit</p>
              </div>
              <ConfirmDeletePopup
                trigger={
                  <div className="flex gap-3 border-t-[1px] pt-[5px] border-[#c3c3c3] items-center cursor-pointer">
                    <Eraser className="w-[18px] cursor-pointer text-primary" />
                    <p className="text-foreground dark:text-foreground-dark">Delete</p>
                  </div>
                }
                title={`Confirm deleting this todo`}
                body={`Are you sure deleting this todo?`}
                onSubmit={() => {
                  handleDeleteTodo(id);
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <p className="font-semibold text-[17px]">{todo}</p>
        <p className="text-description text-sm">Landing Page UI</p>
      </div>
      <div className="border-t-[1px] text-description border-[#e1e1e1] dark:border-[#606060] flex items-center pt-2 justify-between">
        <div className="flex items-center gap-y-[1px]" style={{ maxWidth: '200px' }}>
          {allProfiles.map((imageScr, index) => (
            <div
              key={imageScr}
              className="relative w-[32px] h-[32px] rounded-full overflow-hidden border-[2px] border-card -ml-[6px]"
              style={{ zIndex: index }}
            >
              <img src={imageScr} alt="Team member" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <MessageCircleMore className="w-[22px] cursor-pointer" strokeWidth={2} />
          <p className="font-semibold">3</p>
        </div>
      </div>
      {isEditing && <TodoForm closeTodoForm={handleCloseTodoForm} todoId={id} />}
    </div>
  );
};

export default SingleTask;
