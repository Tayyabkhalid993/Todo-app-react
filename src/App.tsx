import './App.css'
import Clock from './components/Clock'
import Calendar from './components/Calendar'
import TodoApp from './components/TodoApp'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  
  return (
    <>
    <Header />
   <div className='block md:flex min-h-screen w-full w-3xl gap-10 justify-center p-6 sm:p-10'>
    <div className='space-y-6 mb-10'>
      <Clock />
      <Calendar />
    </div>
    <div>
      <TodoApp/>
    </div>
   </div>
    <Footer/>
    </>
  )
}

export default App


