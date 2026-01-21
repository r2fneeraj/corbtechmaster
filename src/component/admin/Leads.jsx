import React, { useEffect, useState } from "react";
import "./Leads.css";

export default function Leads() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchLeads = async () => {
        try {
            const res = await fetch("/api/leads");
            const data = await res.json();

            if (data.success) {
                setLeads(data.leads);
            } else {
                alert("Failed to load leads");
            }
        } catch (err) {
            alert("Server error while loading leads");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    if (loading) return <div style={{ padding: 20 }}>Loading leads...</div>;

    return (
        <div style={{ padding: 20 }}>
            <h2>All Leads</h2>

            {leads.length === 0 ? (
                <p>No leads found.</p>
            ) : (
                <table border="1" cellPadding="10" style={{ width: "100%", marginTop: 15 }}>
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
                        {leads.map((lead) => (
                            <tr key={lead._id}>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.service}</td>
                                <td>{lead.request}</td>
                                <td>{new Date(lead.createdAt).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
