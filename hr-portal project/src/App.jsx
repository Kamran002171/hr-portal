import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Employees from "./components/Employees";
import TerminatedEmployees from "./components/TerminatedEmployees";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">
      <Sidebar setPage={setPage} />

      <div className="content">

        {page === "dashboard" && <Dashboard />}

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

        {page === "terminatedEmployees" && (
          <TerminatedEmployees />
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