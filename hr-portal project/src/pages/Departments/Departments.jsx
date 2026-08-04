import { useMemo, useState } from "react";
import { Building2, Users } from "lucide-react";
import "./Departments.css";

function formatDate(date) {
  if (!date) return "-";

  // Əgər artıq 09.08.2024 formatındadırsa
  if (date.includes(".")) {
    return date;
  }

  // Əgər 2024-08-09 formatındadırsa
  const parts = date.split("-");

  if (parts.length === 3) {
    return `${parts[2]}.${parts[1]}.${parts[0]}`;
  }

  return "-";
}
function Departments() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const departments = useMemo(() => {
    return [...new Set(employees.map((emp) => emp.sobe).filter(Boolean))];
  }, [employees]);

  const [selectedDepartment, setSelectedDepartment] = useState(
    departments[0] || ""
  );

  const colors = [
    "#2563eb",
    "#16a34a",
    "#9333ea",
    "#ea580c",
    "#dc2626",
    "#0891b2",
    "#ca8a04",
    "#0f766e",
  ];

  return (
    <div className="departments">

      <div className="departments-header">
        <h1>Şöbələr</h1>
      </div>

      <div className="department-cards">

        {departments.map((dep, index) => {

          const departmentEmployees = employees.filter(
            (emp) => emp.sobe === dep
          );

          const manager =
            departmentEmployees.find(
              (emp) =>
                emp.vezife?.toLowerCase().includes("müdir") ||
                emp.vezife?.toLowerCase().includes("rəhbər")
            ) || null;

          return (

            <div
              key={dep}
              className={`department-card ${
                selectedDepartment === dep ? "active" : ""
              }`}
              onClick={() => setSelectedDepartment(dep)}
            >

              <div className="department-top">

                <div
                  className="department-icon"
                  style={{
                    background: colors[index % colors.length],
                  }}
                >
                  <Building2 size={24} color="#fff" />
                </div>

                <div>

                  <h3>{dep}</h3>

                  <p className="manager-name">
                    {manager
                      ? `${manager.ad} ${manager.soyad}`
                      : "Rəhbər təyin edilməyib"}
                  </p>

                </div>

              </div>

              <div className="department-divider"></div>

              <div className="department-bottom">

                <Users
                  size={24}
                  color={colors[index % colors.length]}
                />

                <div className="employee-count">

                  <strong>
                    {departmentEmployees.length}
                  </strong>

                  <span>İşçi</span>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {selectedDepartment && (
        <>          <div className="department-table">

            <div className="table-header">
              <h2>{selectedDepartment}</h2>
            </div>

            <table>

              <thead>

                <tr>
                  <th>Ad və Soyad</th>
                  <th>Vəzifə</th>
                  <th>Maaş (AZN)</th>
                  <th>İşə qəbul tarixi</th>
                </tr>

              </thead>

              <tbody>

                {employees
                  .filter((emp) => emp.sobe === selectedDepartment)
                  .map((emp) => (

                    <tr key={emp.id}>

                      <td>
                        {emp.ad} {emp.soyad}
                      </td>

                      <td>{emp.vezife}</td>

                     <td>
  {emp.maas || "-"}
</td>

                      <td>
  {formatDate(emp.iseQebul)}
</td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        </>
      )}

    </div>
  );
}

export default Departments;