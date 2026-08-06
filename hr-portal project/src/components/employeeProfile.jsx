import { useState } from "react";
import "./EmployeeProfile.css";
import EmployeeEdit from "./EmployeeEdit";

function EmployeeProfile({ 
  employee, 
  setSelectedEmployee, 
  updateEmployee,
  terminateEmployee
}) {

  const [isEditing, setIsEditing] = useState(false);
  const [showTerminateConfirm, setShowTerminateConfirm] = useState(false);


  const formatDate = (date) => {
    if (!date) return "";

    if (typeof date === "string" && date.includes(".")) {
      return date;
    }

    const d = new Date(date);

    if (isNaN(d.getTime())) return date;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
  };


  if (isEditing) {
    return (
      <EmployeeEdit
        employee={employee}
        updateEmployee={updateEmployee}
        setIsEditing={setIsEditing}
      />
    );
  }


  return (
    <div className="employees">

      <button onClick={() => setSelectedEmployee(null)}>
        ← Geri
      </button>


      <div className="profile-header">
        <h1>👤 {employee.ad} {employee.soyad}</h1>
        <p className="employee-code">{employee.id}</p>
        <p>🟢 {employee.status}</p>
      </div>



      <div className="profile-card">
        <h2>👤 Şəxsi məlumatlar</h2>


        <div className="profile-row">
          <span className="profile-label">Ad</span>
          <span className="profile-value">{employee.ad}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Soyad</span>
          <span className="profile-value">{employee.soyad}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Ata adı</span>
          <span className="profile-value">{employee.ataAdi}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Doğum tarixi</span>
          <span className="profile-value">
            {formatDate(employee.dogumTarixi)}
          </span>
        </div>
        <div className="profile-row">
  <span className="profile-label">Cins</span>
  <span className="profile-value">
    {employee.cins || "-"}
  </span>
</div>


        <div className="profile-row">
          <span className="profile-label">Vəsiqə nömrəsi</span>
          <span className="profile-value">{employee.vesiqe}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">FİN kod</span>
          <span className="profile-value">{employee.fin}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Telefon</span>
          <span className="profile-value">{employee.telefon}</span>
        </div>

      </div>




      <div className="profile-card">

        <h2>💼 İş məlumatları</h2>


        <div className="profile-row">
          <span className="profile-label">Vəzifə</span>
          <span className="profile-value">{employee.vezife}</span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Şöbə</span>
          <span className="profile-value">{employee.sobe}</span>
        </div>


        <div className="profile-row">
  <span className="profile-label">Maaş</span>
  <span className="profile-value">
    {employee.maas ? `${employee.maas} AZN` : "-"}
  </span>
</div>


        <div className="profile-row">
          <span className="profile-label">İşə qəbul tarixi</span>
          <span className="profile-value">
            {formatDate(employee.iseQebul)}
          </span>
        </div>


        <div className="profile-row">
          <span className="profile-label">
            Müqavilənin bitmə tarixi
          </span>
          <span className="profile-value">
            {formatDate(employee.muqavileBitme)}
          </span>
        </div>


        <div className="profile-row">
          <span className="profile-label">Status</span>
          <span className="profile-value">
            {employee.status}
          </span>
        </div>

      </div>




      <div className="profile-buttons">

        <button
          className="edit-btn"
          onClick={() => setIsEditing(true)}
        >
          ✏️ Redaktə et
        </button>



        <button
          className="terminate-btn"
          onClick={() => setShowTerminateConfirm(true)}
        >
          🔴 Xitam ver
        </button>

      </div>




      {showTerminateConfirm && (

        <div className="confirm-overlay">

          <div className="confirm-box">

            <h2>⚠️ Xitam təsdiqi</h2>


            <p>
              {employee.ad} {employee.soyad} işçisinə xitam vermək istəyirsiniz?
            </p>


            <div className="confirm-buttons">


              <button
                className="yes-btn"
                onClick={() => {
                  terminateEmployee(employee);
                  setShowTerminateConfirm(false);
                }}
              >
                 Bəli
              </button>



              <button
                className="no-btn"
                onClick={() => setShowTerminateConfirm(false)}
              >
                 Xeyr
              </button>


            </div>


          </div>

        </div>

      )}


    </div>
  );
}

export default EmployeeProfile;