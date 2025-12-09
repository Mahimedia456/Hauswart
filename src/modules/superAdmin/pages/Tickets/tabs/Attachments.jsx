import { useNavigate, useParams } from "react-router-dom";

export default function Attachments() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-6 border shadow">
      <h2 className="text-xl font-bold mb-4">Attachments</h2>

      <button
        onClick={() => navigate(`/super-admin/tickets/${id}/attachments`)}
        className="px-4 py-2 bg-primary text-white rounded-lg"
      >
        Open Attachment Manager →
      </button>
    </div>
  );
}
