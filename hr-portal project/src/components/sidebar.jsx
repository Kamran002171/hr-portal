import { useState } from "react";
import "./Sidebar.css";

import {
  FaChartPie,
  FaUsers,
  FaBuilding,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUserSlash,
  FaChartBar,
  FaCog,
  FaBriefcase,
} from "react-icons/fa";

function Sidebar({ setPage }) {
  const [activePage, setActivePage] = useState("dashboard");

  const handlePage = (page) => {
    setActivePage(page);
    setPage(page);
  };

  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <div className="logo">
          <FaBriefcase />
        </div>

        <div>
          <h2>HR Portal</h2>
          <span>Human Resources Management</span>
        </div>
      </div>

      <ul>

        <li
          className={activePage === "dashboard" ? "active" : ""}
          onClick={() => handlePage("dashboard")}
        >
          <FaChartPie />
          <span>Dashboard</span>
        </li>

        <li
          className={activePage === "employees" ? "active" : ""}
          onClick={() => handlePage("employees")}
        >
          <FaUsers />
          <span>İşçilər</span>
        </li>

        <li
          className={activePage === "departments" ? "active" : ""}
          onClick={() => handlePage("departments")}
        >
          <FaBuilding />
          <span>Şöbələr</span>
        </li>

        <li
          className={activePage === "leaves" ? "active" : ""}
          onClick={() => handlePage("leaves")}
        >
          <FaCalendarAlt />
          <span>Məzuniyyətlər</span>
        </li>

        <li
          className={activePage === "salary" ? "active" : ""}
          onClick={() => handlePage("salary")}
        >
          <FaMoneyBillWave />
          <span>Əmək haqqı</span>
        </li>

        <li
          className={
            activePage === "terminatedEmployees"
              ? "active"
              : ""
          }
          onClick={() => handlePage("terminatedEmployees")}
        >
          <FaUserSlash />
          <span>Xitam verilən işçilər</span>
        </li>

        <li
          className={activePage === "reports" ? "active" : ""}
          onClick={() => handlePage("reports")}
        >
          <FaChartBar />
          <span>Hesabatlar</span>
        </li>

        <li
          className={activePage === "settings" ? "active" : ""}
          onClick={() => handlePage("settings")}
        >
          <FaCog />
          <span>Parametrlər</span>
        </li>

      </ul>

      <div className="sidebar-footer">
        <p>Developed by</p>
        <strong>Kamran Hasanov</strong>
      </div>

    </div>
  );
}

export default Sidebar;