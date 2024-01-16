import Link from 'next/link';
import React from 'react';
import { PiFilmSlateBold } from "react-icons/pi";
import styles from './styles.module.css'


function Header() {
  return (
  <header className={`${styles.header} container fluid`}>
    <div className={styles.headerWrapper}>
      <Link href='/' className={styles.logo}> 
       <PiFilmSlateBold/> NETFILMS
       </Link>
       <nav className={styles.navigationMenu}>
        <Link href='/'>Movies</Link>
        <Link href='/'>Series</Link>
        <Link href='/'>Kids</Link>
       </nav>
    </div>
    </header>
    )
  }
export default Header;
