import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../../context/LanguageContext";
import { t } from "../../../../i18n/translations";

export default function TicketTabs({ activeTab, setActiveTab, ticketId }) {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const dict = t[lang];

  const tabs = [
    { id: "overview", label: dict.ticket_tab_overview },
    { id: "detail", label: dict.ticket_tab_detail },
    { id: "attachments", label: dict.ticket_tab_attachments },
    {
      id: "conversation",
      label: dict.ticket_tab_conversation,
      external: `/super-admin/tickets/${ticketId}/conversation`,
    },
    { id: "history", label: dict.ticket_tab_history },
    { id: "chat", label: dict.ticket_tab_chathub },
    { id: "assessment", label: dict.ticket_tab_assessment },
    { id: "timeline", label: dict.ticket_tab_timeline },
  ];

  return (
    <div className="bg-white/80 rounded-2xl border border-slate-200 shadow p-3 flex gap-2 overflow-x-auto">
      {tabs.map((tab) =>
        tab.external ? (
          <button
            key={tab.id}
            onClick={() => navigate(tab.external)}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200"
          >
            {tab.label}
          </button>
        ) : (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 rounded-xl text-sm font-medium transition
              ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }
            `}
          >
            {tab.label}
          </button>
        )
      )}
    </div>
  );
}
