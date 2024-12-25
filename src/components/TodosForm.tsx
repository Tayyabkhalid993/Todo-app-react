import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState("")
  const { addTodos } = useTodo()

  const add = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!todo) return

    console.log("Adding todo:", todo) // Debug log
    addTodos({id:Date.now(), todo, completed: false })
    setTodo("")
  }

  return (
    <form onSubmit={add} className="flex flex-col items-center gap-2 min-w-20 sm:min-w-80">
      <input
        type="text"
        placeholder="Write Todo..."
        className="max-w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="px-3 py-1 max-w-32 font-light rounded-lg backdrop-blur-md shadow-2xl hover:bg-white/20 text-black/80">
       Add to list
      </button>
    </form>
  )
}

export default TodoForm