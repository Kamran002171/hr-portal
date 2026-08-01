import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Employees from './components/Employees';

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <div className="content">

        {page === "dashboard" && (
          <>
            <h1>Dashboard</h1>
            <p>HR Portal idarəetmə paneli</p>

            <div className="cards">
              <div className="card">
                <h3>👥 İşçilər</h3>
                <p>120 nəfər</p>
              </div>

              <div className="card">
                <h3>🏢 Şöbələr</h3>
                <p>8 şöbə</p>
              </div>

              <div className="card">
                <h3>📅 Məzuniyyətlər</h3>
                <p>15 gözləyir</p>
              </div>

              <div className="card">
                <h3>💰 Maaş xərci</h3>
                <p>25 000 AZN</p>
              </div>
            </div>
          </>
        )}

        {page === "employees" && (
          <Employees />
        )}

        {page === "departments" && (
          <>
            <h1>Şöbələr</h1>
            <p>Şöbələr bölməsi</p>
          </>
        )}

        {page === "leaves" && (
          <>
            <h1>Məzuniyyətlər</h1>
            <p>Məzuniyyətlər bölməsi</p>
          </>
        )}

        {page === "salary" && (
          <>
            <h1>Əmək haqqı</h1>
            <p>Əmək haqqı bölməsi</p>
          </>
        )}

        {page === "reports" && (
          <>
            <h1>Hesabatlar</h1>
            <p>Hesabatlar bölməsi</p>
          </>
        )}

        {page === "settings" && (
          <>
            <h1>Parametrlər</h1>
            <p>Parametrlər bölməsi</p>
          </>
        )}

      </div>
    </div>
  );
}

export default App;