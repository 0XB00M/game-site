"use client";

// components/Form.tsx
import React, { useState } from "react";

const Form: React.FC = () => {
  const [agentUsername, setAgentUsername] = useState("");
  const [key, setKey] = useState("");
  const [username, setUsername] = useState("");
  const [tab, setTab] = useState("");
  const [web, setWeb] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [data, setData] = useState({
    gameType: [],
    games: [
        {
            gameCategory: "",
            gameName: "",
            gameType: [],
            id: "",
            image: {
                banner: "",
                horizontal: "",
                vertical: "",
            },
            provider: "",
            status: "",
        }

    ],

    
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { agentUsername, key, username, tab, web };

    const response = await fetch(
      "https://api-test.ambexapi.com/api/v1/ext/gameList/664DF64C2EA2D0B684D1F1F7/testopuplunarr",
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
    console.log(data);
  };

  return (
    <div>
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
          <select
            name="tab"
            id="tab"
            defaultValue="Casino"
            onChange={(e) => setTab(e   .target.value)}
          >
            <option value="Slot">Slot</option>
            <option value="Casino">Casino</option>
            <option value="Keno">Keno</option>
            <option value="Fish">Fish</option>
            <option value="Card">Card</option>
            <option value="Trade">Trade</option>
            <option value="Poker">Poker</option>
            <option value="Esport">Esport</option>
            <option value="Cock">Cock</option>
            <option value="Sbo">Sbo</option>
            <option value="Saba">Saba</option>
            <option value="Dbs">Dbs</option>
            <option value="Fbs">Fbs</option>
            <option value="Plb">Plb</option>
            <option value="Umb">Umb</option>
            <option value="Vsb">Vsb</option>
            <option value="Afb">Afb</option>
            <option value="Lali">Lali</option>
          </select>
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
          <div>
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
          <p>{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Form;
