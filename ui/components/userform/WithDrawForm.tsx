"use client";

// components/Form.tsx
import React, { useState } from "react";
import styles from "./WithDraw.module.css";

const Form: React.FC = () => {
  const [agentUsername, setAgentUsername] = useState("");
  const [key, setKey] = useState("");
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState<number>(0);
  const [web, setWeb] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [data, setData] = useState({
    afterCredit: 0,
    beforeCredit: 0,
    refId: "",
    agent: {
      beforeCredit: 0,
      afterCredit: 0,
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { agentUsername, key, username, balance, web };

    try {
      const response = await fetch(
        "https://api-test.ambexapi.com/api/v1/ext/withdrawal/664DF64C2EA2D0B684D1F1F7/testopuplunarr",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setResponseMessage(result.msg);
      setData(result.data);
      console.log(data);
    } catch (error) {
      console.error('Error during form submission:', error);
      setResponseMessage('Failed to submit form. Please try again.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setBalance(value);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="agentUsername">Agent Username:</label>
          <input
            type="text"
            id="agentUsername"
            value={agentUsername}
            onChange={(e) => setAgentUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="key">Key:</label>
          <input
            type="text"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="balance">Balance:</label>
          <input
            type="number"
            id="balance"
            value={balance}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="web">Web:</label>
          <input
            type="text"
            id="web"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* User data */}
      <div>
        {responseMessage === "SUCCESS" ? (
          <div className={styles.userData}>
            {Object.entries(data).map(([key, value]) => {
              if (key === "agent" && typeof value === "object") {
                return (
                  <div key={key}>
                    <h3>{key.charAt(0).toUpperCase() + key.slice(1)}:</h3>
                    {Object.entries(value).map(([agentKey, agentValue]) => (
                      <p key={agentKey}>{`${agentKey}: ${agentValue}`}</p>
                    ))}
                  </div>
                );
              }
              return <p key={key}>{`${key}: ${value}`}</p>;
            })}
          </div>
        ) : (
          <p className={styles.responseMessage}>{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Form;