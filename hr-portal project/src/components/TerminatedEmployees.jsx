import { useState } from "react";
import "./Employees.css";

function TerminatedEmployees() {

  const [terminatedEmployees] = useState(() => {
    const saved = localStorage.getItem("terminatedEmployees");

    return saved ? JSON.parse(saved) : [];
  });


  return (
    <div className="employees">

      <h1>📂 Xitam verilən işçilər</h1>


      {terminatedEmployees.length === 0 ? (

        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Hələ xitam verilmiş işçi yoxdur.
        </p>

      ) : (

        <table className="employee-table">

          <thead>
            <tr>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Vəzifə</th>
              <th>Şöbə</th>
              <th>Xitam tarixi</th>
            </tr>
          </thead>


          <tbody>

            {terminatedEmployees.map((employee, index) => (

              <tr key={index}>

                <td>{employee.ad}</td>

                <td>{employee.soyad}</td>

                <td>{employee.vezife}</td>

                <td>{employee.sobe}</td>

                <td>{employee.xitamTarixi}</td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default TerminatedEmployees;