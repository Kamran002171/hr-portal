import "./LeaveTable.css";

export default function LeaveTable() {
    return (
        <div className="leave-table-wrapper">

            <table className="leave-table">

                <thead>

                    <tr>

                        <th>İşçi</th>

                        <th>Şöbə</th>

                        <th>Vəzifə</th>

                        <th>Məzuniyyət növü</th>

                        <th>Əsas gün</th>

                        <th>Əlavə gün</th>

                        <th>İstifadə olunan</th>

                        <th>Qalıq</th>

                        <th>Çıxma tarixi</th>

                        <th>Qayıtma tarixi</th>

                        <th>Status</th>

                        <th>Əməliyyat</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td colSpan="12" className="empty-table">

                            Hələ məzuniyyət məlumatı yoxdur.

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>
    );
}