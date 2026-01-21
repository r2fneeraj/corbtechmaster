import { useEffect, useMemo, useState } from "react";
import "./Leads.css";

export default function Leads() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [q, setQ] = useState("");

    const fetchLeads = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/leads");
            const data = await res.json();

            if (data.success) {
                setLeads(data.leads);
            } else {
                alert("Failed to fetch leads");
            }
        } catch (error) {
            alert("Backend not reachable. Please start backend.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const filteredLeads = useMemo(() => {
        const query = q.trim().toLowerCase();
        if (!query) return leads;

        return leads.filter((l) => {
            return (
                (l.name || "").toLowerCase().includes(query) ||
                (l.email || "").toLowerCase().includes(query) ||
                (l.phone || "").toLowerCase().includes(query) ||
                (l.service || "").toLowerCase().includes(query) ||
                (l.request || "").toLowerCase().includes(query)
            );
        });
    }, [q, leads]);

    return (
        <div className="leads-page">
            <div className="leads-header">
                <div className="leads-title">
                    <h2>📩 Leads</h2>
                    <p>Chatbot enquiries saved in MongoDB are displayed here.</p>
                </div>

                <div className="leads-actions">
                    <input
                        className="searchBox"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search name / phone / email..."
                    />

                    <button
                        className="btn btn-outline"
                        onClick={() => {
                            setQ("");
                            setLoading(true);
                            fetchLeads();
                        }}
                    >
                        🔄 Refresh
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => alert(`Total Leads: ${leads.length}`)}
                    >
                        📊 Total: {leads.length}
                    </button>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="state-box">Loading leads...</div>
                ) : filteredLeads.length === 0 ? (
                    <div className="state-box">
                        No leads found. <span className="muted">(Try Refresh)</span>
                    </div>
                ) : (
                    <div className="table-wrap">
                        <table className="leads-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Service</th>
                                    <th>Request</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredLeads.map((lead) => (
                                    <tr key={lead._id}>
                                        <td>
                                            <strong>{lead.name}</strong>
                                        </td>
                                        <td>{lead.email}</td>
                                        <td>{lead.phone}</td>
                                        <td>
                                            <span className="badge">{lead.service}</span>
                                        </td>
                                        <td>{lead.request}</td>
                                        <td className="muted">
                                            {lead.createdAt
                                                ? new Date(lead.createdAt).toLocaleString()
                                                : "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>=
                    </div>
                )}
            </div>
        </div>
    );
}
