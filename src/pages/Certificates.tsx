import React, { useState } from "react";
import "./Certificates.css";
import ParticleBackground from "../components/ParticleBackground";

type VerificationResult =
  | {
      type: "html";
      data: string;
    }
  | {
      type: "error";
      data: string;
    };

const Certificates: React.FC = () => {
  const [event, setEvent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        "https://certificate-backend-v5ny.onrender.com/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        }
      );

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("text/html")) {
        const html = await res.text();
        setResult({ type: "html", data: html });
      } else {
        const data = await res.json();
        if (data.name === "Name does not exist") {
          setResult({
            type: "error",
            data: "This name was not found in our records.",
          });
        }
      }
    } catch (err) {
      console.error("API Error:", err);
      setResult({ type: "error", data: "Could not connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ParticleBackground />
      <div className="certificate-container">
        <div
          className={`certificate-card ${
            result?.type === "html" ? "certificate-generated" : ""
          }`}
        >
          <div className="form-header">
            <h1 className="main-title">Certificate Validator</h1>
            <p className="subtitle">Claim Your Certificate</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Select Event</label>
              <select
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required
              >
                <option value="">-- Choose an Event --</option>
                <option value="veritas">Veritas</option>
              </select>
            </div>

            <div className="form-group">
              <label>Enter Your Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Jane Doe"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? (
                <span className="spinner-container">
                  <span className="spinner"></span> Verifying...
                </span>
              ) : (
                "Get Certificate"
              )}
            </button>
          </form>

          {result?.type === "error" && (
            <div className="error-message">{result.data}</div>
          )}

          {result?.type === "html" && (
            <div className="certificate-view">
              <iframe
                srcDoc={result.data}
                title="Certificate"
                className="certificate-frame"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Certificates;
