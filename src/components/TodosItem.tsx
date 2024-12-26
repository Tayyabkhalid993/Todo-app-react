import { useState } from 'react'
import { useTodo } from '../contexts'
import {Pencil, Save, Trash} from 'lucide-react'
type TodoItemProps = {
  todo: {
    id: number
    todo: string
    completed: boolean
  }
}

function TodoItem({ todo }: TodoItemProps) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodos, deleteTodos, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodos({ ...todo, todo: todoMsg }, todo.id)
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-1 shadow-sm shadow-white/50 duration-300 text-black ${
        todo.completed ? 'bg-white/30' : 'bg-white/60'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'
        } ${todo.completed ? 'line-through' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return

          if (isTodoEditable) {
            editTodo()
          } else setIsTodoEditable((prev) => !prev)
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? <Save height={12}/> : <Pencil height={12} />}
      </button>
      <button
        className="inline-flex w-6 h-6 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodos(todo.id)}
      >
       <Trash height={13}/>
      </button>
    </div>
  )
}

export default TodoItem