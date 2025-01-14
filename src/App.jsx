import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TransferHistory from './components/TransferHistory';
import DepositHistory from './components/DepositHistory';
import Transfer from './pages/Transfer';
import Deposit from './pages/Deposit';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render Navbar */}
      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/transfer-history" element={<TransferHistory />} />
        <Route path="/deposit-history" element={<DepositHistory />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}











// // import { useState } from 'react'
// import './App.css'
// import { BrowserRouter, Routes, Route } from "react-router";
// import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
// import TransferHistory from './components/TransferHistory';
// import DepositHistory from './components/DepositHistory';
// import Transfer from './pages/Transfer';
// import Deposit from './pages/Deposit';
// // import Navbar from './components/navbar'

// function App() {

//   return (
//     <>
//     <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/transfer-history" element={<TransferHistory />} />
//           <Route path="/deposit-history" element={<DepositHistory />} />
//           <Route path="/transfer" element={<Transfer />} />
//           <Route path="/deposit" element={<Deposit />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App
