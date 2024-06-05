'use client';

import React, { useState } from 'react';
import styles from './ChangStatus.module.css';

const Form: React.FC = () => {
  const [agentUsername, setAgentUsername] = useState('');
  const [key, setKey] = useState('');
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState('');
  const [web, setWeb] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = { agentUsername, key, username, status, web };

    const response = await fetch(
      "https://api-test.ambexapi.com/api/v1/ext/editUnderActive/664DF64C2EA2D0B684D1F1F7/testopuplunarr",
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
  };

  return (
    <div className={styles['form-container']}>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="agentUsername">Agent Username:</label>
          <input
            className={styles['input']}
            type="text"
            id="agentUsername"
            value={agentUsername}
            onChange={(e) => setAgentUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="key">Key:</label>
          <input
            className={styles['input']}
            type="text"
            id="key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="username">Username:</label>
          <input
            className={styles['input']}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="status">Status:</label>
          <select
            className={`${styles['input']} ${styles['select']}`}
            name="status"
            id="status"
            defaultValue="ACTIVE"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>ACTIVE</option>
            <option>LOCK</option>
            <option>SUSPEND</option>
          </select>
        </div>
        <div className={styles['form-group']}>
          <label className={styles['label']} htmlFor="web">Web:</label>
          <input
            className={styles['input']}
            type="text"
            id="web"
            value={web}
            onChange={(e) => setWeb(e.target.value)}
            required
          />
        </div>
        <button className={styles['button']} type="submit">Submit</button>
      </form>
      {responseMessage && <p className={styles['response-message']}>{responseMessage}</p>}
    </div>
  );
};

export default Form;
