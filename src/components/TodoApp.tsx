import { useEffect, useState } from 'react'
import { TodoProvider } from '../contexts'
import {TodoForm, TodoItem } from './'

type Todo = {
  id: number
  todo: string
  completed: boolean
}

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodos = (todo: Omit<Todo, 'id'>) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodos = (todo: Todo, id: number) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? todo : t)))
  }

  const deleteTodos = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
   <TodoProvider value={{todos,addTodos,updateTodos,deleteTodos, toggleComplete}}>

    <div className='flex flex-col gap-4 max-w-[450px] mb-10'>

                    <div className="py-4 px-4 h-18 bg-white/50 rounded-lg backdrop-blur-md shadow-2xl">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
   
                <div className="w-full min-h-80 max-w-3xl mx-auto bg-white/50 rounded-lg backdrop-blur-md shadow-2xl px-4 py-2">
                    <h1 className="text-2xl font-normal text-center mb-2 mt-2">Todo List</h1>
                <hr className=' bg-white/50 mb-5' />
                    <div className="flex flex-col gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='max-w-[500px]'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
      </TodoProvider>
  )
}

export default TodoApp
