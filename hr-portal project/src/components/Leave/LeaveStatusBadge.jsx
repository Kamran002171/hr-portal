import "./LeaveStatusBadge.css";

import {
    Clock3,
    CirclePlay,
    CircleCheckBig,
} from "lucide-react";

export default function LeaveStatusBadge({ status }) {

    const statusMap = {
        "Başlayacaq": {
            icon: <Clock3 size={16} />,
            className: "status-pending",
        },

        "Davam edir": {
            icon: <CirclePlay size={16} />,
            className: "status-active",
        },

        "Bitdi": {
            icon: <CircleCheckBig size={16} />,
            className: "status-finished",
        },
    };

    const current = statusMap[status];

    if (!current) return null;

    return (
        <span className={`leave-status ${current.className}`}>
            {current.icon}
            {status}
        </span>
    );
}