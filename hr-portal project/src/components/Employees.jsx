import { useState, useEffect } from "react";
import "./Employees.css";
import EmployeeTable from "./EmployeeTable";
import EmployeeProfile from "./EmployeeProfile";
import AddEmployee from "./AddEmployee";
import ExcelImport from "./ExcelImport";

function Employees() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showExcelImport, setShowExcelImport] = useState(false);

  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }

    return [
      {
  id: "EMP-0001",
  ad: "Əli",
  soyad: "Məmmədov",
  ataAdi: "Rəşad",
  dogumTarixi: "15.04.1995",
  vezife: "Mühasib",
  sobe: "Maliyyə",
  maas: "1200 AZN",
  status: "Aktiv",
  iseQebul: "2024-03-15",
  muqavileBitme: "2027-03-15",
  vesiqe: "AZE1234567",
  fin: "7ABCD12",
  telefon: "+994 50 123 45 67",
}
    ];
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === updatedEmployee.id ? updatedEmployee : emp
    );

    setEmployees(updatedEmployees);
    setSelectedEmployee(updatedEmployee);
  };

  const addEmployee = (employee) => {
    const lastId =
      employees.length > 0
        ? Number(employees[employees.length - 1].id.replace("EMP-", ""))
        : 0;

    const newEmployee = {
      ...employee,
      id: `EMP-${String(lastId + 1).padStart(4, "0")}`,
    };

    setEmployees([...employees, newEmployee]);
    setShowAddForm(false);
  };

  // Excel-dən gələn işçiləri əlavə edir
  const addEmployeesFromExcel = (excelEmployees) => {
  let lastId =
    employees.length > 0
      ? Number(employees[employees.length - 1].id.replace("EMP-", ""))
      : 0;

  const formatDate = (date) => {
    if (!date) return "";

    // Əgər artıq 01.01.2026 formatındadırsa
    if (typeof date === "string" && date.includes(".")) {
      return date;
    }

    // Əgər 2026-01-01 formatındadırsa
    if (typeof date === "string" && date.includes("-")) {
      const [year, month, day] = date.split("-");
      return `${day}.${month}.${year}`;
    }

    // Excel tarix nömrəsidirsə
    if (typeof date === "number") {
      const excelDate = new Date((date - 25569) * 86400 * 1000);

      const day = String(excelDate.getDate()).padStart(2, "0");
      const month = String(excelDate.getMonth() + 1).padStart(2, "0");
      const year = excelDate.getFullYear();

      return `${day}.${month}.${year}`;
    }

    return "";
  };

  const newEmployees = excelEmployees.map((emp) => {
    lastId++;

    return {
      id: `EMP-${String(lastId).padStart(4, "0")}`,

      ad: emp.Ad || emp.AD || "",

      soyad: emp.Soyad || emp.SOYAD || "",

      ataAdi: emp["Ata adı"] || emp["ATA ADI"] || "",

      dogumTarixi: formatDate(
        emp["Doğum tarixi"] || emp["DOĞUM TARİXİ"]
      ),

      vesiqe: emp["Ş/V nömrəsi"] || "",

      fin: emp.FIN || "",

      telefon: emp.Telefon || "",

      sobe: emp.Şöbə || "",

      vezife: emp["Vəzifənin adı"] || emp.Vəzifə || "",

      maas:
        emp["İşçinin aylıq əmək haqqı"] ||
        emp.Maaş ||
        "",

      iseQebul: formatDate(
        emp["Əsas müqavilənin başlama tarixi"] ||
        emp["İşə qəbul tarixi"]
      ),

      muqavileBitme: formatDate(
        emp["Müqavilənin bitmə tarixi"]
      ),

      status: "Aktiv",
    };
  });

  setEmployees([...employees, ...newEmployees]);

  setShowExcelImport(false);

  alert(`${newEmployees.length} işçi uğurla əlavə edildi.`);
};

  if (selectedEmployee) {
    return (
      <EmployeeProfile
        employee={selectedEmployee}
        setSelectedEmployee={setSelectedEmployee}
        updateEmployee={updateEmployee}
      />
    );
  }

  if (showAddForm) {
    return (
      <div className="employees">
        <AddEmployee
          addEmployee={addEmployee}
          setShowAddForm={setShowAddForm}
        />
      </div>
    );
  }

  if (showExcelImport) {
    return (
      <div className="employees">
        <button onClick={() => setShowExcelImport(false)}>
          ← Geri
        </button>

        <h1>📂 Excel-dən işçiləri yüklə</h1>

        <ExcelImport addEmployees={addEmployeesFromExcel} />
      </div>
    );
  }

  return (
    <div className="employees">
      <EmployeeTable
        employees={employees}
        setSelectedEmployee={setSelectedEmployee}
        setShowAddForm={setShowAddForm}
        setShowExcelImport={setShowExcelImport}
      />
    </div>
  );
}

export default Employees;