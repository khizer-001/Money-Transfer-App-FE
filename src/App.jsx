// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TransferHistory from './components/TransferHistory';
import DepositHistory from './components/DepositHistory';
import Transfer from './pages/Transfer';
import Deposit from './pages/Deposit';
// import Navbar from './components/navbar'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/transfer-history" element={<TransferHistory />} />
          <Route exact path="/deposit-history" element={<DepositHistory />} />
          <Route exact path="/transfer" element={<Transfer />} />
          <Route exact path="/deposit" element={<Deposit />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
