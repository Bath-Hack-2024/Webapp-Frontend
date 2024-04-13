import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "@/css/main.css"
import Header from './components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
