// SlideMenu.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
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
                    <li><Link href="https://www.fideg.org/">slot</Link></li>
                    <li><Link href="/casino">คาสิโน</Link></li>
                    <li><Link href="https://www.symbiont.io/">กีฬา</Link></li>
                    <li><Link href="/special">สิทธิพิเศษ</Link></li>
                    <li><Link href="/promotions">โปรโมชั่น</Link></li>
                    <li><Link href="/continuous-deposit">ฝากต่อเนื่อง</Link></li>
                    <li><Link href="https://www.sbobetonline24.com/">พันธมิตร</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default SlideMenu;
