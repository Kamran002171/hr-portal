import { useState } from "react";
import "./EmployeeProfile.css";

function EmployeeEdit({ employee, updateEmployee, setIsEditing }) {

  const [formData, setFormData] = useState(employee);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSave = () => {

    // Dəyişiklikləri əsas işçi siyahısına göndərir
    updateEmployee(formData);

    // Profilə qayıdır
    setIsEditing(false);
  };


  return (
    <div className="employees">

      <button onClick={() => setIsEditing(false)}>
        ← Geri
      </button>


      <h1>✏️ İşçini redaktə et</h1>


      <div className="profile-card">

        <h2>👤 Şəxsi məlumatlar</h2>


        <div className="profile-row">
          <span className="profile-label">Ad</span>
          <input
            name="ad"
            value={formData.ad}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">Soyad</span>
          <input
            name="soyad"
            value={formData.soyad}
            onChange={handleChange}
          />
        </div>
        <div className="profile-row">
  <span className="profile-label">Ata adı</span>
  <input
    name="ataAdi"
    value={formData.ataAdi || ""}
    onChange={handleChange}
  />
</div>

<div className="profile-row">
  <span className="profile-label">Doğum tarixi</span>
  <input
  type="date"
  name="dogumTarixi"
  value={
    formData.dogumTarixi
      ? formData.dogumTarixi.includes(".")
        ? formData.dogumTarixi.split(".").reverse().join("-")
        : formData.dogumTarixi
      : ""
  }
  onChange={handleChange}
/>
</div>


        <div className="profile-row">
          <span className="profile-label">Vəsiqə nömrəsi</span>
          <input
            name="vesiqe"
            value={formData.vesiqe}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">FİN kod</span>
          <input
            name="fin"
            value={formData.fin}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">Telefon</span>
          <input
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
          />
        </div>

      </div>



      <div className="profile-card">

        <h2>💼 İş məlumatları</h2>


        <div className="profile-row">
          <span className="profile-label">Vəzifə</span>
          <input
            name="vezife"
            value={formData.vezife}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">Şöbə</span>
          <input
            name="sobe"
            value={formData.sobe}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">Maaş</span>
          <input
            name="maas"
            value={formData.maas}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">İşə qəbul tarixi</span>
          <input
            name="iseQebul"
            value={formData.iseQebul}
            onChange={handleChange}
          />
        </div>


        <div className="profile-row">
          <span className="profile-label">Müqavilənin bitmə tarixi</span>
          <input
            name="muqavileBitme"
            value={formData.muqavileBitme}
            onChange={handleChange}
          />
        </div>


      </div>



      <div className="profile-buttons">

        <button
          className="edit-btn"
          onClick={handleSave}
        >
          💾 Yadda saxla
        </button>


        <button
          className="terminate-btn"
          onClick={() => setIsEditing(false)}
        >
          ❌ Ləğv et
        </button>


      </div>


    </div>
  );
}


export default EmployeeEdit;