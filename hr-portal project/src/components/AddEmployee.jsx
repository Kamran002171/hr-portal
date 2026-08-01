import { useState } from "react";

function AddEmployee({ addEmployee, setShowAddForm }) {
  const [employee, setEmployee] = useState({
    ad: "",
    soyad: "",
    ataAdi: "",
    dogumTarixi: "",
    vesiqe: "",
    fin: "",
    telefon: "",
    vezife: "",
    sobe: "",
    maas: "",
    iseQebul: "",
    muqavileBitme: "",
    status: "Aktiv",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    if (
      !employee.ad ||
      !employee.soyad ||
      !employee.ataAdi ||
      !employee.dogumTarixi ||
      !employee.vesiqe ||
      !employee.fin ||
      !employee.telefon ||
      !employee.vezife ||
      !employee.sobe ||
      !employee.maas ||
      !employee.iseQebul ||
      !employee.muqavileBitme
    ) {
      alert("Zəhmət olmasa bütün sahələri doldurun.");
      return;
    }

    addEmployee(employee);
  };

  return (
    <div className="add-employee">
      <h2>Yeni işçi əlavə et</h2>

      <input
        type="text"
        name="ad"
        placeholder="Ad"
        value={employee.ad}
        onChange={handleChange}
      />

      <input
        type="text"
        name="soyad"
        placeholder="Soyad"
        value={employee.soyad}
        onChange={handleChange}
      />

      <input
        type="text"
        name="ataAdi"
        placeholder="Ata adı"
        value={employee.ataAdi}
        onChange={handleChange}
      />

      <label>Doğum tarixi</label>
      <input
        type="date"
        name="dogumTarixi"
        value={employee.dogumTarixi}
        onChange={handleChange}
      />

      <input
        type="text"
        name="vesiqe"
        placeholder="Vəsiqə nömrəsi"
        value={employee.vesiqe}
        onChange={handleChange}
      />

      <input
        type="text"
        name="fin"
        placeholder="FIN kod"
        value={employee.fin}
        onChange={handleChange}
      />

      <input
        type="text"
        name="telefon"
        placeholder="Telefon"
        value={employee.telefon}
        onChange={handleChange}
      />

      <input
        type="text"
        name="vezife"
        placeholder="Vəzifə"
        value={employee.vezife}
        onChange={handleChange}
      />

      <input
        type="text"
        name="sobe"
        placeholder="Şöbə"
        value={employee.sobe}
        onChange={handleChange}
      />

      <input
        type="text"
        name="maas"
        placeholder="Maaş"
        value={employee.maas}
        onChange={handleChange}
      />

      <label>İşə qəbul tarixi</label>
      <input
        type="date"
        name="iseQebul"
        value={employee.iseQebul}
        onChange={handleChange}
      />

      <label>Müqavilənin bitmə tarixi</label>
      <input
        type="date"
        name="muqavileBitme"
        value={employee.muqavileBitme}
        onChange={handleChange}
      />

      <label>Status</label>
      <select
        name="status"
        value={employee.status}
        onChange={handleChange}
      >
        <option value="Aktiv">Aktiv</option>
        <option value="Passiv">Passiv</option>
      </select>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleSave}>💾 Yadda saxla</button>

        <button
          onClick={() => setShowAddForm(false)}
          style={{ marginLeft: "10px" }}
        >
          ❌ Ləğv et
        </button>
      </div>
    </div>
  );
}

export default AddEmployee;