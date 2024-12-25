import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      containerStyle={{

      }}
      containerClassName="ClassName"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
    },
  }}
/>
  </StrictMode>,
)
