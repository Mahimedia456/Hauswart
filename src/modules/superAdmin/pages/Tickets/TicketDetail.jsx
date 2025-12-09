import { useParams } from "react-router-dom";
import { useState } from "react";
import TicketHeader from "./TicketHeader";
import TicketTabs from "./TicketTabs";

export default function TicketDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <TicketHeader ticketId={id} />

      {/* TABS */}
      <TicketTabs activeTab={activeTab} setActiveTab={setActiveTab} ticketId={id} />

      {/* TAB CONTENT */}
      <div>
        {activeTab === "overview" && <Overview />}
        {activeTab === "detail" && <Detail />}
        {activeTab === "attachments" && <Attachments />}
        {activeTab === "history" && <HistoryLog />}
        {activeTab === "chat" && <ChatHub />}
        {activeTab === "assessment" && <Assessment />}
        {activeTab === "timeline" && <TimelineAudit />}
      </div>
    </div>
  );
}

/* Lazy imports to avoid circular errors */
import Overview from "./tabs/Overview";
import Detail from "./tabs/Detail";
import Attachments from "./tabs/Attachments";
import HistoryLog from "./tabs/HistoryLog";
import ChatHub from "./tabs/ChatHub";
import Assessment from "./tabs/Assessment";
import TimelineAudit from "./tabs/TimelineAudit";
