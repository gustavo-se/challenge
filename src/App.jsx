import { useState } from 'react'
import './App.css'
import { BasePage } from './pages/BasePage'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <UserProvider>
      <BasePage />
    </UserProvider>
  )
}

export default App
