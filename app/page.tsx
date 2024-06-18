// page.tsx

"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css';
import SlideMenu from '@/ui/components/userform/SlideMenu';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>แอพคาสิโนของฉัน</title>
        <meta name="description" content="สร้างโดย create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Image src="/image/Demo888_logo1.png" alt="DEMO888 Logo" width={356} height={137} />
          </div>
          {isMobile ? (
            <SlideMenu />
          ) : (
            <>
              <Link href="https://www.fideg.org/" className={styles.navLink}>slot</Link>
              <Link href="/casino" className={styles.navLink}>คาสิโน</Link>
              <Link href="https://www.symbiont.io/" className={styles.navLink}>กีฬา</Link>
              <Link href="/special" className={styles.navLink}>สิทธิพิเศษ</Link>
              <Link href="/promotions" className={styles.navLink}>โปรโมชั่น</Link>
              <Link href="/continuous-deposit" className={styles.navLink}>ฝากต่อเนื่อง</Link>
              <Link href="https://www.sbobetonline24.com/" className={styles.navLink}>พันธมิตร</Link>
            </>
          )}
          <Link href="/login" className={styles.authLink} aria-label="Login">
            <Image src="/image/Butt_login.png" alt="Login" width={130} height={46} />
          </Link>
          <Link href="/admin-panel/add-user" className={styles.authLink} aria-label="Register">
            <Image src="/image/Butt_register.png" alt="Register" width={130} height={46} />
          </Link>
        </div>
      </header>

      <div className={styles.bannerTop}>
        <div className={styles.bannerTopImage}>
          <Image src="/image/Demo888_banner01.png" alt="Banner Top 1" layout="responsive" width={1024} height={345} />
        </div>
        <div className={styles.bannerTopImage}>
          <Image src="/image/Demo888_banner02.png" alt="Banner Top 2" layout="responsive" width={1024} height={345} />
        </div>
        <div className={styles.bannerTopImage}>
          <Image src="/image/Demo888_banner03.png" alt="Banner Top 3" layout="responsive" width={1024} height={345} />
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.banner}>
          <Image src="/image/Demo888_Title_pic01.png" alt="แบนเนอร์หลัก" layout="responsive" width={750} height={236} />
          <Image src="/image/Demo888_banner_large01.png" alt="แบนเนอร์หลัก" layout="responsive" width={1024} height={345} />
        </div>

        <section className={styles.section}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Link href="/page1">
                <Image src="/image/freecredit.png" alt="ภาพที่ 1" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/page2">
                <Image src="/image/entrance.png" alt="ภาพที่ 2" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/admin-panel/deposit">
                <Image src="/image/depost-3.png" alt="ภาพที่ 3" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/page4">
                <Image src="/image/cashback.png" alt="ภาพที่ 4" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/page5">
                <Image src="/image/linkget.png" alt="ภาพที่ 5" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/admin-panel/history">
                <Image src="/image/transection.png" alt="ภาพที่ 6" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/page7">
                <Image src="/image/promo.png" alt="ภาพที่ 7" width={210} height={342} />
              </Link>
            </div>
            <div className={styles.card}>
              <Link href="/admin-panel/withdraw">
                <Image src="/image/withdraw.png" alt="ภาพที่ 8" width={210} height={342} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <Image src="/image/Demo888_logo_foot.png" alt="DEMO Logo" width={250} height={119} className={styles.footerLogo} />
          <Image src="/image/Demo888_head_menuFoot1.png" alt="MENU" width={236} height={39} className={styles.footerLogomenu} />
          <Image src="/image/Demo888_head_menuFoot2.png" alt="MENU" width={202} height={37} className={styles.footerLogomenu} />
          <Image src="/image/line.png" alt="Line" width={246} height={109} className={styles.footerLogo} />
        </div>
      </footer>
    </div>
  );
}
