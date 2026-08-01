import * as XLSX from "xlsx";

function ExcelImport({ addEmployees }) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target.result);

        const workbook = XLSX.read(data, {
          type: "array",
        });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const excelData = XLSX.utils.sheet_to_json(worksheet, {
          defval: "",
        });

        if (excelData.length === 0) {
          alert("Excel faylı boşdur.");
          return;
        }

        addEmployees(excelData);
      } catch (error) {
        alert("Excel faylı oxunarkən xəta baş verdi.");
        console.error(error);
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>📂 Excel faylı seçin</h2>

      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileUpload}
      />

      <p style={{ marginTop: "15px", color: "#666" }}>
        Yalnız Excel (.xlsx və .xls) faylları dəstəklənir.
      </p>
    </div>
  );
}

export default ExcelImport;