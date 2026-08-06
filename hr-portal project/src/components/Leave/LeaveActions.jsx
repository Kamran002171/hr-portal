import "./LeaveActions.css";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function LeaveActions() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="leave-actions" ref={menuRef}>

            <button
                className="action-btn"
                onClick={() => setOpen(!open)}
            >
                <MoreVertical size={18} />
            </button>

            {open && (

                <div className="action-menu">

                    <button>
                        <Pencil size={16} />
                        Redaktə et
                    </button>

                    <button className="delete-action">
                        <Trash2 size={16} />
                        Sil
                    </button>

                </div>

            )}

        </div>
    );
}