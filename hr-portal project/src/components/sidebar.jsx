import './Sidebar.css';

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>🏢 HR Portal</h2>

      <ul>
        <li onClick={() => setPage("dashboard")}>🏠 Dashboard</li>

        <li onClick={() => setPage("employees")}>👥 İşçilər</li>

        <li onClick={() => setPage("departments")}>🏢 Şöbələr</li>

        <li onClick={() => setPage("leaves")}>📅 Məzuniyyətlər</li>

        <li onClick={() => setPage("salary")}>💰 Əmək haqqı</li>

        <li onClick={() => setPage("reports")}>📊 Hesabatlar</li>

        <li onClick={() => setPage("settings")}>⚙️ Parametrlər</li>
      </ul>
    </div>
  );
}

export default Sidebar;