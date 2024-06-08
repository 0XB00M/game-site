'use client';
// SlideMenu.tsx
import React, { useState } from 'react';
import styles from './SlideMenu.module.css';

const SlideMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={toggleMenu} className={styles.menuButton}>
                ☰
            </button>
            <div className={`${styles.slideMenu} ${isOpen ? styles.open : ''}`}>
                <button onClick={closeMenu} className={styles.closeButton}>
                    ✕
                </button>
                <ul>
                    <li><a href="#">เกม</a></li>
                    <li><a href="/admin-panel/deposit">ฝาก</a></li>
                    <li><a href="/admin-panel/withdraw">ถอน</a></li>
                    <li><a href="/admin-panel/history">ประวัติ</a></li>
                </ul>
            </div>
        </div>
    );
};

export default SlideMenu;
