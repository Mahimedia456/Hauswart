import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketHeader({ ticketId }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  return (
    <div className="bg-white/80 rounded-2xl border border-slate-200 p-6 shadow-md flex justify-between items-start">
      
      {/* LEFT */}
      <div>
        <h2 className="text-xl font-bold text-slate-900">
          {dict.ticket} #{ticketId}
        </h2>

        <p className="text-sm text-slate-600">{dict.ticket_subtitle}</p>

        <p className="text-sm text-slate-500 mt-1">
          <span className="font-semibold">{dict.ticket_category}</span>: HVAC
        </p>
      </div>

      {/* RIGHT */}
      <div className="text-right space-y-3">
        
        {/* STATUS */}
        <span className="inline-flex rounded-full bg-orange-100 text-orange-700 px-3 py-1 text-sm font-medium">
          In Progress
        </span>

        {/* ACTION BUTTONS */}
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => navigate(`/super-admin/tickets/${ticketId}/edit`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition"
          >
            {dict.action_edit}
          </button>

          <button
            onClick={() => navigate(`/super-admin/tickets/${ticketId}/assign`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100 transition"
          >
            {dict.ticket_assign}
          </button>

          <button
            onClick={() => navigate(`/super-admin/tickets/${ticketId}/delete`)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition"
          >
            {dict.action_delete}
          </button>
        </div>
      </div>
    </div>
  );
}
