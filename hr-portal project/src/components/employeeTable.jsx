import { useState } from "react";
import "./Employees.css";

function EmployeeTable({
  employees,
  setSelectedEmployee,
  setShowAddForm,
  setShowExcelImport,
}) {
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const searchText = search.toLowerCase();

    return (
      employee.ad.toLowerCase().includes(searchText) ||
      employee.soyad.toLowerCase().includes(searchText) ||
      employee.fin.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
      <h1>İşçilər</h1>

      <div className="employee-buttons">
        <button onClick={() => setShowAddForm(true)}>
          ➕ Yeni işçi əlavə et
        </button>

        <button onClick={() => setShowExcelImport(true)}>
          📂 Excel yüklə
        </button>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Ad, soyad və ya FIN ilə axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p>Tapıldı: {filteredEmployees.length} işçi</p>
      </div>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Soyad</th>
            <th>Vəzifə</th>
            <th>Şöbə</th>
            <th>Maaş</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredEmployees.map((employee) => (
            <tr
              key={employee.id}
              onClick={() => setSelectedEmployee(employee)}
              style={{ cursor: "pointer" }}
            >
              <td>{employee.ad}</td>
              <td>{employee.soyad}</td>
              <td>{employee.vezife}</td>
              <td>{employee.sobe}</td>
              <td>{employee.maas}</td>
              <td>{employee.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmployeeTable;