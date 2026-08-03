import "./Dashboard.css";
import { FaUsers, FaBuilding, FaUserSlash, FaMoneyBillWave } from "react-icons/fa";

function Dashboard() {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const terminatedEmployees =
    JSON.parse(localStorage.getItem("terminatedEmployees")) || [];

  // Aktiv işçilərin sayı
  const activeEmployeeCount = employees.length;

  // Xitam verilənlərin sayı
  const terminatedEmployeeCount = terminatedEmployees.length;

  // Şöbə sayı
  const departmentCount = new Set(
    employees.map((emp) => emp.sobe).filter(Boolean)
  ).size;

  // Əmək haqqı fondu
  const totalSalary = employees.reduce((sum, emp) => {
    const salary = Number(
      String(emp.maas)
        .replace("AZN", "")
        .replace(/\s/g, "")
        .replace(",", ".")
    );

    return sum + (isNaN(salary) ? 0 : salary);
  }, 0);

  return (
    <div className="dashboard">
      <h1>İdarəetmə paneli</h1>

      <div className="cards">

        <div className="card">
          <div className="card-icon">
            <FaUsers />
          </div>

          <h3>Aktiv işçilər</h3>

          <p>{activeEmployeeCount} nəfər</p>
        </div>


        <div className="card">
          <div className="card-icon">
            <FaBuilding />
          </div>

          <h3>Şöbələr</h3>

          <p>{departmentCount} şöbə</p>
        </div>


        <div className="card">
          <div className="card-icon">
            <FaUserSlash />
          </div>

          <h3>Xitam verilənlər</h3>

          <p>{terminatedEmployeeCount} nəfər</p>
        </div>


        <div className="card">
          <div className="card-icon">
            <FaMoneyBillWave />
          </div>

          <h3>Əmək haqqı fondu</h3>

          <p>{totalSalary.toLocaleString("az-AZ")} AZN</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;