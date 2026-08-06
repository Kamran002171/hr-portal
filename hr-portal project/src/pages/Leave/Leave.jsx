import "./Leave.css";

import LeaveTable from "../../components/Leave/LeaveTable";
import Pagination from "../../components/Leave/Pagination";

import AddLeaveModal from "../../components/Leave/AddLeaveModal";
import LeaveCalculatorModal from "../../components/Leave/LeaveCalculatorModal";

import { CalendarDays, Calculator, Plus } from "lucide-react";
import { useState } from "react";

export default function Leave() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showCalculatorModal, setShowCalculatorModal] = useState(false);

    return (
        <div className="leave-page">

            {/* Header */}

            <div className="leave-header">

                <div className="leave-title">

                    <div className="leave-title-icon">
                        <CalendarDays size={30} />
                    </div>

                    <div>
                        <h1>Məzuniyyətlər</h1>
                        <p>
                            İşçilərin məzuniyyət məlumatlarını izləyin və idarə edin
                        </p>
                    </div>

                </div>

                <div className="leave-buttons">

                    <button
                        className="calculate-btn"
                        onClick={() => setShowCalculatorModal(true)}
                    >
                        <Calculator size={18} />
                        Məzuniyyət hesabla
                    </button>

                    <button
                        className="add-btn"
                        onClick={() => setShowAddModal(true)}
                    >
                        <Plus size={18} />
                        Məzuniyyət əlavə et
                    </button>

                </div>

            </div>

            {/* Table */}

            <div className="leave-content">

                <LeaveTable />

                <Pagination />

            </div>

            {/* Modals */}

            <AddLeaveModal
                open={showAddModal}
                onClose={() => setShowAddModal(false)}
            />

            <LeaveCalculatorModal
                open={showCalculatorModal}
                onClose={() => setShowCalculatorModal(false)}
            />

        </div>
    );
}