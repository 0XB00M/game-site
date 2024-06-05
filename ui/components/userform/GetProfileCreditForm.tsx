"use client";

// components/Form.tsx
import React, { useState } from "react";
import styles from "./GetProfileCreditForm.module.css";

const Form: React.FC = () => {
  const [agentUsername, setAgentUsername] = useState("");
  const [key, setKey] = useState("");
  const [username, setUsername] = useState("");
  const [web, setWeb] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [data, setData] = useState({
    balance: 0,
    currency: "THB",
    lastPaymentID: null,
    outStandingAmt: {
      hdp: 0,
      mixParlay: 0,
      mixStep: 0,
      casino: 0,
      slot: 0,
      card: 0,
      lotto: 0,
      keno: 0,
      trade: 0,
      poker: 0,
      esport: 0,
      cock: 0,
      sbo: 0,
      saba: 0,
      dbs: 0,
      fbs: 0,
      plb: 0,
      umb: 0,
      vsb: 0,
      afb: 0,
      lali: 0,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { agentUsername, key, username, web };

    const response = await fetch(
      "https://api-test.ambexapi.com/api/v1/ext/getProfileAndCredit/664DF64C2EA2D0B684D1F1F7/testopuplunarr",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    setResponseMessage(result.msg);
    setData(result.data);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="agentUsername">Agent Username:</label>
          <input
            type="text"
            id="agentUsername"
            value={agentUsername}
            onChange={(e) => setAgentUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="key">Key:</label>
          <input
            type="text"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="web">Web:</label>
          <input
            type="text"
            id="web"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
      {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}

      {/* User data */}
      {responseMessage === "SUCCESS" && (
        <div className={styles.userData}>
          <p>Balance: {data.balance}</p>
          <p>Currency: {data.currency}</p>
          <p>Last Payment ID: {data.lastPaymentID}</p>
          <div>
            <h3>Outstanding Amounts:</h3>
            {Object.entries(data.outStandingAmt).map(([key, value]) => (
              <p key={key}>{`${key}: ${value}`}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;