"use client";
// History.module.css
import React, { useState } from "react";
import styles from '@/ui/components/userform/History.module.css';

const Form: React.FC = () => {
  const [action, setAction] = useState('action');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAction(event.target.value);
  };

  const handleFromDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>รายการฝากถอน</h1>
      
      <div className={styles.filter}>
        <label htmlFor="action">Action: </label>
        <select id="action" value={action} onChange={handleActionChange}>
          <option value="action">Action</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
        </select>
        
        <label htmlFor="fromDate">จากวันที่: </label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={handleFromDateChange}
        />

        <label htmlFor="toDate">ถึงวันที่: </label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={handleToDateChange}
        />
      </div>
      
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>ลำดับ</th>
            <th className={styles.th}>รายการ</th>
            <th className={styles.th}>สกุลเงิน</th>
            <th className={styles.th}>จำนวนเงิน</th>
            <th className={styles.th}>เครดิตก่อนหน้า</th>
            <th className={styles.th}>เครดิตหลัง</th>
            <th className={styles.th}>ขอโดย</th>
            <th className={styles.th}>IP</th>
            <th className={styles.th}>สถานะ</th>
            <th className={styles.th}>วัน เวลา</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default Form;
