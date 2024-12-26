import './App.css'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import TodoApp from './components/TodoApp'

function App() {
  
  return (
   <div className='block md:flex h-screen w-full w-3xl gap-10 justify-center p-6 sm:p-10'>
    <div className='flex flex-col gap-10 mb-10'>
      <Clock />
      <Calendar />
    </div>
    <div>
      <TodoApp/>
    </div>
   </div>
  )
}

export default App


