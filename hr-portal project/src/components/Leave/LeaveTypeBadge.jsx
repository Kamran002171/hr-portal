import "./LeaveTypeBadge.css";

import {
    Briefcase,
    HeartHandshake,
    GraduationCap,
    CircleMinus,
} from "lucide-react";

export default function LeaveTypeBadge({ type }) {

    const typeMap = {

        "Əmək": {
            icon: <Briefcase size={16} />,
            className: "type-work",
        },

        "Sosial": {
            icon: <HeartHandshake size={16} />,
            className: "type-social",
        },

        "Təhsil": {
            icon: <GraduationCap size={16} />,
            className: "type-education",
        },

        "Ödənişsiz": {
            icon: <CircleMinus size={16} />,
            className: "type-unpaid",
        },

    };

    const current = typeMap[type];

    if (!current) return null;

    return (
        <span className={`leave-type ${current.className}`}>
            {current.icon}
            {type}
        </span>
    );
}